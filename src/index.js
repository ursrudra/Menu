import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
// import { robots }from './robots';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
	<App/>	
	, document.getElementById('root'));
registerServiceWorker();
