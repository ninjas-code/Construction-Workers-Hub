var Sequelize = require('sequelize');
const sequelize = new Sequelize('construction_worker_hub', 'root', '1998', {
	host: 'localhost',
	dialect: 'mysql'
});

console.log('database connected');
