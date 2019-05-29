var mysql = require('mysql');
var Sequelize = require('sequelize');

//Database connection
const db = new Sequelize('sql7293816', 'sql7293816', 'iDWuS81vjK', {
	host: 'sql7.freesqldatabase.com',
	dialect: 'mysql'
});

db.sync({ force: false, logging: false }).then(() => {
	console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
