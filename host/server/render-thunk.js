const renderThunk = () => async (req, res, next) => {
	let renderer; 
	try {
		renderer = (await import('./renderer')).default;
	} catch (error) {
		console.error(error)
		renderer = (req, res, next) => res.send('Error caught');
	}

	return renderer(req, res, next);
};

export default renderThunk;
