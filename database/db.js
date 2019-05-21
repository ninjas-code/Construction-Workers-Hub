var mysql = require('mysql');
var Sequelize = require('sequelize');

//Database connection
const db = new Sequelize('construction_worker_hub', 'root', '1111', {
	host: 'localhost',
	dialect: 'mysql'
});

db.sync({ force: true, logging: false }).then(() => {
	console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
