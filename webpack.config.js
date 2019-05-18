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
				loader: 'babel-loader',
				// exclude: /node_modules/,
				query: {
					presets: [ 'react', 'es2015' ]
				}
			}
		]
	}
};

////
// var path = require('path');
// var webpack = require('webpack');
// module.exports = {
// 	entry: './client/app.jsx',
// 	output: {
// 		path: path.resolve(__dirname, 'public'),
// 		filename: 'aa.bundle.js'
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.jsx$/,
// 				loader: 'babel-loader',
// 				query: {
// 					presets: [ 'react', 'es2015' ]
// 				}
// 			}
// 		]
// 	}
// };
