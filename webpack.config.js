var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/component/mount.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			include: __dirname,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};