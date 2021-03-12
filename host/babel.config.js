'use strict';

const crypto = require('crypto');

console.log('using babel.config.js');

module.exports = function (api) {
	api.cache(true);

	let presets = [
		'@babel/preset-env',
		'@babel/preset-react',
	];

	let plugins = [
		'@loadable/babel-plugin',
	];

	return {
		presets,
		plugins,
	};
};
