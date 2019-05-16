var mysql = require('mysql');
var Sequelize = require('sequelize');
const sequelize = new Sequelize('construction_worker_hub', 'root', '1998', {
	host: 'localhost',
	dialect: 'mysql'
});

const engineer = sequelize.define('engineer', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	fullName: { type: Sequelize.STRING, required: true },
	userName: { type: Sequelize.STRING, required: true, unique: true },
	password: { type: Sequelize.STRING, required: true },
	siteLocation: { type: Sequelize.STRING, required: true },
	// profilePic: type: Sequelize.BLOB('long')     // refer bsck to this column to add image
	phoneNumber: { type: Sequelize.INTEGER, unique: true }
});

const worker = sequelize.define('worker', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	fullName: { type: Sequelize.STRING, required: true },
	userName: { type: Sequelize.STRING, required: true, unique: true },
	password: { type: Sequelize.STRING, required: true },
	experienceLevel: { type: Sequelize.STRING },
	expectedSalary: { type: Sequelize.INTEGER, required: true },
	phoneNumber: { type: Sequelize.INTEGER, unique: true, required: true },
	status: { type: Sequelize.NUMBER },
	role: { type: Sequelize.STRING, required: true }
});

const order = sequelize.define('order', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	engineerName: { type: Sequelize.STRING, required: true },
	workerName: { type: Sequelize.STRING, required: true },
	feedBack: { type: Sequelize.STRING, required: false }
});

order.hasMany(engineer);
order.hasMany(worker);

console.log('database connected');
