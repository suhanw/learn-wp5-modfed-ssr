import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import App from './components/App';

loadableReady(() => {
	ReactDOM.hydrate(
		<App />,
		document.getElementById('ssr-app')
	); 
});
