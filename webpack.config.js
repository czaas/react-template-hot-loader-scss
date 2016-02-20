var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: __dirname + '/component/mount.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + '/component/index.html',
			path: __dirname + '/component',
			filename: 'index.html'
		})
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
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded']
		}]
	}
};