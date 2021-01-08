import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/App';

const renderer = async (req, res, next) => {
	const jsx = ReactDOMServer.renderToString(<App />);

	const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`;
	const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/styles/client_index_js.bundle.css">`;
	const remoteBundleScript = `<script src="http://localhost:8081/scripts/remoteEntry.js"></script>`;

	res.send(`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>My SSR App</title>
				${remoteBundleScript}
				${clientBundleStyle}
			</head>
			<body>
				<div id='ssr-app'>${jsx}</div>
				${clientBundleScript}
			</body>
		</html>
	`);
};

export default renderer;
