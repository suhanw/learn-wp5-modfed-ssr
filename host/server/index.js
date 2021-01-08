import 'core-js';
import 'regenerator-runtime';
import express from 'express';
import initMiddleware from "./middleware";

const app = express();
const port = 3000;

const done = () => {
	app.listen(port, () => {
		console.log(`Server is listening on port: ${port}`);
	});
};

initMiddleware(express, app, done);
