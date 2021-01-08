const initMiddleware = async (express, app, done) => {
	const renderThunk = require('./render-thunk').default;

	const renderer = renderThunk();
	app.get('/*', renderer);

	done();
};

export default initMiddleware;
