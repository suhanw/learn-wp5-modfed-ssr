import React from 'react';
import loadable from '@loadable/component';
import style from './style.less';
// import TopNav from 'remote/top-nav';
const TopNav = loadable(() => import('remote/top-nav'), { ssr: true });

const App = () => {
	return (
		<div className={style.app}>
			<TopNav />
			Hello World
		</div>
	);
}


export default App; 
