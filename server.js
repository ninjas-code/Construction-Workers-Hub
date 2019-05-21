const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const SECRET_KEY = 'somesting';
//const cors = require("cors");
const { engineer, worker } = require('./database/models');

const app = express();
const port = process.env.PORT || 5000;

//things to install
//npm i bcrypt
//npm i cors --save
//npm install body-parser --save
// npm install --save bluebird

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/signupEngineer', function(req, res) {
	let fullname = req.body.fullname;
	let username = req.body.username;
	let password = req.body.password;
	let location = req.body.sitelocation;
	let phonenumber = req.body.phonenumber;
	let hashedPassword = bcrypt.hashSync(password, 10);
	engineer
		.create({
			fullName: fullname,
			userName: username,
			siteLocation: location,
			phoneNumber: phonenumber,
			password: hashedPassword
		})
		.then(function() {
			return res.status(201).send({ success: 'Sign up as engineer successful' });
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(400).send({ error: 'This username is already taken' });
			}
			return res.status(500).send('Server Error');
		});
});

//Sign in user
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

//worker

app.post('/signupWorker', function(req, res) {
	const fullName =  req.body.info.fullname;
	const username = req.body.info.username;
	const password = req.body.info.password;
	const experienceLevel = req.body.info.experiencelevel;
	const expectedSalary = req.body.info.expectedsalary;
	const phoneNumber = req.body.info.phonenumber;
	const role = req.body.info.role;
	const status = req.body.info.status;
	// console.log(req.body.info)
	const hashedPassword = bcrypt.hashSync(password, 10);

	worker
		.create({
			fullName: fullName,
			userName: username,
			password: hashedPassword,
			experienceLevel: experienceLevel,
			expectedSalary: expectedSalary,
			phoneNumber: phoneNumber,
			status: status,
			role: role
		})
		.then(function() {
<<<<<<< HEAD
			return res.status(201).send({ success: 'Sign up as worker successful' });
=======
			return res.status(201).send({result:'Sign up as worker successful'});
>>>>>>> f16de0d5d6c3dedc4287411c587ed0048d74d947
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(401).send({ error: 'This username is already taken' });
			}
			return res.status(500).send({ error:'Server Error'});
		});
});


app.post('/signinWorker', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    worker.findOne({where : {userName: username}}).then(function(user){
        if(!user){
            return res.status(401).send({error: 'Wrong username'}); 
        }
        const workerPassword =user.password;
        bcrypt.compare(password , workerPassword).then(function(isMatching){
            if(isMatching){
                // console.log(user)
                const token = jwt.sign({username: user.userName}, SECRET_KEY, {expiresIn: 900});
                return res.send({token: token});
            } else {
                return res.status(401).send({error: 'Wrong password'});
            }
        });
    });
    
});


const authenticateWorker = function(req, res, next){
	const token = req.headers['x-access-token']; //Username encoded in token
	if(!token){
		return res.status(401).send('Please sign in');
	}
	jwt.verify(token, SECRET_KEY, (err, data) => {
        //console.log(data)
		if(err){
			return res.status(401).send('Please sign in');
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
			req.body.user = user; // put user in req.body
			//console.log(user)
			return next();
		}).catch(function(err){
			return res.status(500).send(err);
		})
	});
 };

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
				role: user.role
			});
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

app.get('/engineerPage', authenticate, function(req, res) {
	const user = req.body.user;
	engineer
		.findOne({ where: { id: user.id } })
		.then(function(user) {
			return res.send({ fullName: user.fullName, userName: user.userName, phoneNumber: user.phoneNumber });
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

// will filter out  from database by server

// app.get('/role' ,  authenticate , function(req, res) {
//     const workerArr =[];

// 	const Role = req.body.role;

// 	worker
// 		.findAll({ where: { role : Role } })
// 		.then(function(users) {

// users.forEach(function(user) {
//       workerArr.push({ fullName: user.fullName,
// 				experienceLevel: user.experienceLevel,
// 				expectedSalary: user.expectedSalary,
// 				phoneNumber: user.phoneNumber,
// 				status : user.status,
// 				role: user.role});
//     });
// return res.send({workerArr});

// 		})
// 		.catch(function(err) {
// 			return res.status(500).send(err);
// 		});
// });

app.get('/smith', authenticate, function(req, res) {
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

app.get('/carpenter', authenticate, function(req, res) {
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

app.get('/stoneBuilder', authenticate, function(req, res) {
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

app.get('/painter', authenticate, function(req, res) {
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

app.get('/engineerworker', authenticate, function(req, res) {
	const username = req.body.username;
	worker
		.findOne({ where: { userName: username } })
		.then(function(user) {
			return res.send({
				fullName: user.fullName,
				experienceLevel: user.experienceLevel,
				expectedSalary: user.expectedSalary,
				phoneNumber: user.phoneNumber,
				status: user.status,
				role: user.role
			});
		})
		.catch(function(err) {
			return res.status(500).send(err);
		});
});

app.listen(port, function() {
	console.log(`app listening on port ${port}!`);
});
//npm i bcrypt
//npm i cors --save
//npm install body-parser --save
