const renderThunk = () => async (req, res, next) => {
	const renderer = (await import('./renderer')).default;
	return renderer(req, res, next);
};

export default renderThunk;
