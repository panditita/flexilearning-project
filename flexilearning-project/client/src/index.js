import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import About from './components/About';
import Campus from './components/Campus';
// import Courses from './components/Courses';
// import Contact from './components/Contact';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<div>
			<Route path="/" component={App} />
			<Route path="/student-login" component={Login} />
			<Route path="/about-us" component={About} />
			<Route path="/campus" component={Campus} />
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
