'use strict';

const crypto = require('crypto');

console.log('using babel.config.js');

const generateScopedName = (localName, resourcePath) => {  // https://github.com/michalkvasnicak/babel-plugin-css-modules-transform/issues/103#issuecomment-681853153
	const getHash = value => crypto.createHash('sha256').update(value).digest('hex');
	const hash = getHash(`${resourcePath}${localName}`).slice(0, 5);
	return `${localName}_${hash}`;
};

module.exports = function (api) {
	api.cache(true);

	let presets = [
		'@babel/preset-env',
		'@babel/preset-react',
	];

	let plugins = [];

	if (process.env.BABEL_NODE === 'true') { 
		console.log('using BABEL_NODE babel.config.js')
		
		plugins = [ 
			...plugins,
			['babel-plugin-css-modules-transform', {
				camelCase: true,
				devMode: true,
				extensions: ['.less'],
				generateScopedName: generateScopedName,
			}], 
		]; 
	}

	return {
		presets,
		plugins,
	};
};
