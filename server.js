const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const SECRET_KEY = process.env.SECRET_KEY || 'somesting';
//const cors = require("cors");
const { engineer, worker } = require('./database/models');

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

// app.get('/', function(req, res) {
// 	res.send('Hello World!');
// });

//Create new user in the database
app.post('/signupEngineer', function(req, res) {
	const fullname = req.body.fullname;
	const username = req.body.username;
	const password = req.body.password;
	const location = req.body.sitelocation;
	const phonenumber = req.body.phonenumber;
	const hashedPassword = bcrypt.hashSync(password, 10);
	engineer
		.create({
			fullName: fullname,
			userName: username,
			siteLocation: location,
			phoneNumber: phonenumber,
			password: hashedPassword
		})
		.then(function() {
			return res.status(201).send('Sign up as engineer successful');
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(400).send('This username is already taken');
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
				const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: 10 });
				return res.send({ token: token });
			} else {
				return res.status(401).send({ error: 'Wrong password' });
			}
		});
	});
});

//worker

app.post('/signupWorker', function(req, res) {
	const fullName = req.body.fullname;
	const username = req.body.username;
	const password = req.body.password;
	const experienceLevel = req.body.experiencelevel;
	const expectedSalary = req.body.expectedsalary;
	const phoneNumber = req.body.phonenumber;
	const role = req.body.role;
	const hashedPassword = bcrypt.hashSync(password, 10);

	worker
		.create({
			fullName: fullName,
			userName: username,
			password: hashedPassword,
			experienceLevel: experienceLevel,
			expectedSalary: expectedSalary,
			phoneNumber: phoneNumber,
			role: role
		})
		.then(function() {
			return res.status(201).send('sign up');
		})
		.catch(function(err) {
			if (err.name === 'SequelizeUniqueConstraintError') {
				return res.status(401).send('This username is already taken');
			}
			return res.status(500).send('Server Error');
		});
});

app.post('/signinWorker', function(req, res) {
	const username = req.body.username;
	const password = req.body.password;

	worker.findOne({ where: { userName: username } }).then(function(user) {
		if (!user) {
			return res.status(401).send({ error: 'Wrong username' });
		}
		const workerPassword = user.password;
		bcrypt.compare(password, workerPassword).then(function(isMatching) {
			if (isMatching) {
				const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: 4000 });
				return res.send({ token: token });
			} else {
				return res.status(401).send({ error: 'Wrong password' });
			}
		});
	});
});

// const authenticate = function(req, res, next){
//     const token = req.headers['x-access-token']; //Username encoded in token
//     if(!token){
//         return res.status(401).send('Please sign in');
//     }
//     jwt.verify(token, SECRET_KEY, function(err, data){
//         if(err){
//             return res.status(401).send('Please sign in');
//         }
//         //Check if user exists in the database
//         const username = data.username;
//         User.findOne({where: {userName: username}}).then(function(user){
//             if(!user){
//                 return res.status(401).send('Please sign up');
//             }
//             req.body.user = user;
//             return next();
//         }).catch(function(err){
//             return res.status(500).send(err);
//         })
//     });
// };

// app.get('/workerPage', authenticate, function(req, res) {
//     const worker = req.body.worker;
//     worker.findAll({where: {id: worker.id}}).then(function(fullName , experienceLevel , expectedSalary , phoneNumber , role ){
//         return res.send({fullName: fullName , experienceLevel : experienceLevel , expectedSalary : expectedSalary , phoneNumber : phoneNumber , role : role });
//     }).catch(function(err){
//         return res.status(500).send({error: 'Server Error'});
//     })
// });

app.listen(port, function() {
	console.log(`app listening on port ${port}!`);
});

//npm i bcrypt
//npm i cors --save
//npm install body-parser --save
// npm install --save bluebird
