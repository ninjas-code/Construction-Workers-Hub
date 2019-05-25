const { db, Sequelize } = require('./db.js');

const engineer = db.define('engineer', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	fullName: { type: Sequelize.STRING, required: true },
	userName: { type: Sequelize.STRING, required: true, unique: true },
	password: { type: Sequelize.STRING, required: true },
	siteLocation: { type: Sequelize.STRING, required: true },
	phoneNumber: { type: Sequelize.INTEGER, required: true },
	url: { type: Sequelize.STRING}
});

const worker = db.define('worker', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	fullName: { type: Sequelize.STRING, required: true },
	userName: { type: Sequelize.STRING, required: true, unique: true },
	password: { type: Sequelize.STRING, required: true },
	experienceLevel: { type: Sequelize.STRING },
	expectedSalary: { type: Sequelize.INTEGER, required: true },
	phoneNumber: { type: Sequelize.INTEGER, required: true },
	status: { type: Sequelize.STRING },
	role: { type: Sequelize.STRING, required: true },
	url: { type: Sequelize.STRING}
});

const order = db.define('order', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	engineerName: { type: Sequelize.STRING, required: true },
	workerName: { type: Sequelize.STRING, required: true },
	endDate: { type: Sequelize.DATE },
	status: { type: Sequelize.STRING },
	feedBack: { type: Sequelize.STRING, required: false }
});

engineer.belongsToMany(worker, { through: order });
worker.belongsToMany(engineer, { through: order });

module.exports.engineer = engineer;
module.exports.worker = worker;
module.exports.order = order;





