const renderThunk = () => async (req, res, next) => {
	const renderer = await import('./renderer').then(module => module.default);
	return renderer(req, res, next);
};

export default renderThunk;
