var mysql = require('mysql');
var Sequelize = require('sequelize');

//Database connection
const db = new Sequelize('csql2292452', 'sql2292452', 'cV9!kH3%', {
	host: 'sql2.freesqldatabase.com',
	dialect: 'mysql'
});

db.sync({ force: false, logging: false }).then(() => {
	console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
