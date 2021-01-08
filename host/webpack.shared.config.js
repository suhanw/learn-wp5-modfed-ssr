'use strict';

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},

	resolve: {
		extensions: ['.js', '.less'],
	},
};
