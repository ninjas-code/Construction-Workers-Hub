var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
	entry: `${SRC_DIR}/app.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loaders: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ 'react', 'es2015' ]
				}
			}
		]
	}
};


