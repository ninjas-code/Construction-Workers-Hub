const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');
const socketio = require('socket.io');
const SECRET_KEY = 'somesting';
//const cors = require("cors");
const { engineer, worker, order } = require('./database/models');

const app = express();

const port = process.env.PORT || 5002;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

//things to install
//npm i bcrypt
//npm i cors --save
//npm install body-parser --save
// npm install --save bluebird

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('ANGULAR'));
app.use(bodyParser.json());

//sign up for engineer in the database
app.post('/signupEngineer', function(req, res) {
	let fullname = req.body.fullname;
	let username = req.body.username;
	let password = req.body.password;
	let location = req.body.sitelocation;
	let phonenumber = req.body.phonenumber;
	console.log(fullname)
	// let hashedPassword = bcrypt.hashSync(password, 10);
	// const url = req.body.url;
	engineer
		.create({
			fullName: fullname,
			userName: username,
			siteLocation: location,
			phoneNumber: phonenumber,
			password: password,
			// url: url
		})
		.then(function() {
			return res.status(201).send({ success: 'Sign up as engineer successful' });
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(400).send({ error: 'This username is already taken' });
			}
			return res.status(500).send({ error: 'Server Error' });
		});
});

//Sign in for engineer
app.post('/signinEngineer', function(req, res) {
	const username = req.body.username;
	const password = req.body.password;
	//Check if user exists in the database
	engineer.findOne({ where: { username: username } }).then(function(user) {
		if (!user) {
			return res.status(401).send({ error: 'Please sign up' });
		}
		//Compare with stored password
		const existingHashedPassword = user.password;
		bcrypt.compare(password, existingHashedPassword).then(function(isMatching) {
			if (isMatching) {
				//Create a token and send to client
				const token = jwt.sign({ username: user.userName }, SECRET_KEY, { expiresIn: 900 });
				return res.send({ token: token });
			} else {
				return res.status(401).send({ error: 'Wrong password' });
			}
		});
	});
});

//worker sign up
app.post('/signupWorker', function(req, res) {
	// console.log(req.body)
	const fullName = req.body.fullname;
	const username = req.body.username;
	const password = req.body.password;
	const experienceLevel = req.body.experiencelevel;
	const expectedSalary = req.body.expectedsalary;
	const phoneNumber = req.body.phonenumber;
	const role = req.body.role;
	const status = req.body.status;
    const url = req.body.url;
	// const hashedPassword = bcrypt.hashSync(password, 10);

	worker
		.create({
			fullName: fullName,	
			userName: username,
			password: password,
			experienceLevel: experienceLevel,
			expectedSalary: expectedSalary,
			phoneNumber: phoneNumber,
			status: status,
			role: role,
			url: url
		})
		.then(function() {
			return res.status(201).send({ success: 'Sign up as worker successful' });
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(401).send({ error: 'This username is already taken' });
			}
			console.log(err);
			return res.status(500).send({ error: 'Server Error' });
		});
});

//worker sign in
app.post('/signinWorker', function(req, res) {
	const username = req.body.username;
	const password = req.body.password;
     console.log( username)
	worker.findOne({ where: { userName: username } }).then(function(user) {
		if (!user) {
			return res.status(401).send({ error: 'Wrong username' });
		}
		const workerPassword = user.password;
		bcrypt.compare(password, workerPassword).then(function(isMatching) {
			if (isMatching) {
				// console.log(user)
				const token = jwt.sign({ username: user.userName, role: user.role }, SECRET_KEY, { expiresIn: 900 });
				return res.send({ token: token });
			} else {
				return res.status(401).send({ error: 'Wrong password' });
			}
		});
	});
});

//authentication for both the engineer and workers
const authenticate = function(req, res, next) {
	const token = req.headers['x-access-token']; //Username encoded in token
	if (!token) {
		return res.status(401).send('Please sign in');
	}
	jwt.verify(token, SECRET_KEY, (err, data) => {
		//console.log(data)
		if (err) {
			return res.status(401).send('Please sign in');
		}
		//Check if user exists in the database
		const username = data.username;

		if (data.role) {
			//console.log(username)
			worker
				.findOne({ where: { userName: username } })
				.then((user) => {
					//console.log(user)
					if (!user) {
						return res.status(401).send('Please sign up');
					}
					req.body.user = user; // put user in req.body
					//console.log(user)
					return next();
				})
				.catch(function(err) {
					return res.status(500).send(err);
				});
		} else {
			engineer
				.findOne({ where: { userName: username } })
				.then((user) => {
					//console.log(user)
					if (!user) {
						return res.status(401).send('Please sign up');
					}
					req.body.user = user; // put user in req.body
					//console.log(user)
					return next();
				})
				.catch(function(err) {
					return res.status(500).send(err);
				});
		}
	});
};

//worker profile
app.get('/workerPage', authenticate, function(req, res) {
	const user = req.body.user;
	//console.log(user)
	worker
		.findOne({ where: { id: user.id } })
		.then(function(user) {
			return res.send({
				fullName: user.fullName,
				userName: user.userName,
				experienceLevel: user.experienceLevel,
				expectedSalary: user.expectedSalary,
				phoneNumber: user.phoneNumber,
				status: user.status,
				role: user.role,
				url: user.url
			});
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//engineer profile
app.get('/engineerPage', authenticate, function(req, res) {
	const user = req.body.user;
	engineer
		.findOne({ where: { id: user.id } })
		.then(function(user) {
			return res.send({
				fullName: user.fullName,
				userName: user.userName,
				phoneNumber: user.phoneNumber,
				siteLocation: user.siteLocation,
				url: user.url
			});
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//gets all the smiths from the database to the client when the smiths button is clicked
app.get('/smith', function(req, res) {
	const Role = 'smith';
	worker
		.findAll({ where: { role: Role } })
		.then(function(users) {
			if (!users) {
				return res.send({ error: 'Sorry, There are no smiths available' });
			}

			return res.send(users);
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//gets all the carpenter from the database to the client when the carpenter button is clicked
app.get('/carpenter', function(req, res) {
	const Role = 'carpenter';

	worker
		.findAll({ where: { role: Role } })
		.then(function(users) {
			if (!users) {
				return res.send({ error: 'Sorry, There are no carpenters available' });
			}

			return res.send(users);
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//gets all the stone builders from the database to the client when the stone builders button is clicked
app.get('/stoneBuilder', function(req, res) {
	const Role = 'stoneBuilder';

	worker
		.findAll({ where: { role: Role } })
		.then(function(users) {
			if (!users) {
				return res.send({ error: 'Sorry, There are no stone Builders available' });
			}

			return res.send(users);
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//gets all the painters from the database to the client when the painters button is clicked
app.get('/painter', function(req, res) {
	const Role = 'painter';

	worker
		.findAll({ where: { role: Role } })
		.then(function(users) {
			if (!users) {
				return res.send({ error: 'Sorry, There are no painters available' });
			}

			return res.send(users);
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//shows the profile of all construction workers category from the engineer side
app.get('/engineerworker/:id', function(req, res) {
	const userId = req.params.id;
	console.log(userId);
	worker
		.findOne({ where: { id: userId } })
		.then(function(user) {
			return res.send([
				{
					fullName: user.fullName,
					experienceLevel: user.experienceLevel,
					expectedSalary: user.expectedSalary,
					phoneNumber: user.phoneNumber,
					status: user.status,
					role: user.role,
					username: user.userName,
					url: user.url
				}
			]);
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//adds the name of the engineer and worker in the orders table
app.post('/engineerworker/:id', authenticate, function(req, res) {
	const userId = req.params.id;
	const user = req.body.user;

	engineer
		.findOne({ where: { id: user.id } })
		.then(function(user) {
			const engineers = user.userName;
			worker.findOne({ where: { id: userId } }).then(function(users) {
				order
					.create({
						engineerName: engineers,
						workerName: users.userName,
						status: 'not Available'
					})
					.then(function() {
						return res.status(201).send({ success: 'save data' });
					});
			});
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//Updates the status field in the workers table
app.put('/engineerworker/:id', function(req, res, next) {
	const userId = req.params.id;

	console.log(userId);
	worker
		.update(
			{
				status: 'not Available'
			},
			{
				where: {
					id: userId
				}
			}
		)
		.then(function() {
			res.send('updated');
		})
		.catch(next);
});

app.get('/workerMainPage', authenticate, function(req, res) {
	const user = req.body.user;
	order
		.findOne({ where: { workerName: user.userName } })
		.then(function(users) {
			if (!users) {
				return res.send({ error: 'no order' });
			}
			return res.send(users);
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

//api connection from nexmo
const nexmo = new Nexmo(
	{
		apiKey: '3b3e43dc',
		apiSecret: 'Dj049nK9Vu7xZ1zB'
	},
	{ debug: true }
);

//send sms message
app.post('/sentMessage', function(req, res) {
	console.log(req.body);
	let from = 'Bug-Busters-200';
	let to = req.body.number;
	let text = req.body.msg;
	nexmo.message.sendSms(from, to, text, { type: 'unicode' }, (err, responseData) => {
		if (err) {
			console.log(err);
		} else {
			console.dir(responseData);
			//Get data from response
			const data = {
				id: responseData.messages[0]['message-id'],
				number: responseData.messages[0]['to']
			};

			//Emit to client
			// io.emit('smsStatus', data);
		}
	});
	console.log(data);
});

const server = app.listen(port, () => {
	console.log(`app listening on port ${port}!`);
});

// //connect to socket.io
// const io = socketio(server);
// io.on('connection', (socket) => {
// 	console.log('Connected');
// 	io.on('disconnect', () => {
// 		console.log('Disconnected');
// 	});
// });
