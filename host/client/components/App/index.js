import React, { useEffect } from 'react';
import style from './style.less';
import TopNav from 'remote/top-nav';

const App = () => {
	useEffect(() => {
		console.log('useEffect')
	}, [])
	
	return (
		<div className={style.app}>
			<TopNav />
			Hello World
		</div>
	);
}


export default App; 
