'use strict';

const path = require('path');
const crypto = require('crypto');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const sharedConfig = require('./webpack.shared.config.js');

const port = 8080;

const config = {
	target: 'web',

	entry: './client/bootstrap.js', 

	output: {
		path: path.join(__dirname, './build/client'),
		publicPath: `http://localhost:${port}/`, 
		filename: `scripts/bundle.js`,
	},

	devServer: { 
		port: port, 
		liveReload: true
	},

	plugins: [
		new MiniCssExtractPlugin({ // extracts css from bundle
			filename: `styles/bundle.css`,
		}),
		new ModuleFederationPlugin({
			name: 'host',
			library: { type: 'var', name: 'host' },
			remotes: {
				remote: 'remote',
			},
			shared: require("./package.json").dependencies,
		}),
	],

	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								exportLocalsConvention: 'camelCase',
								localIdentName: '[local]_[hash:base64:5]',
							},
						},
					},
					'less-loader',
				],
			},
		],
	},
};

module.exports = merge(sharedConfig, config);
