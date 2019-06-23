import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Campus from './components/Campus';
import SignIn from './components/SignIn';
import NavBar from './components/NavBar';

// import Courses from './components/Courses';
// import Contact from './components/Contact';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import StudentProfile from './components/StudentProfile';
import Springburn from './components/Springburn';
import Contact from './components/Contact';
import './App.css';
import EastEnd from './components/EastEnd';
import EasterHouse from './components/EasterHouse';

const routing = (
	<Router>
		<div className="main-container">
			<div className="app-container">
				<NavBar />
				<Route exact path="/" component={App} />
				<Route path="/student-login" component={SignIn} />
				<Route path="/about-us" component={About} />
				<Route path="/campus" component={Campus} />
				<Route path="/student-profile" component={StudentProfile} />
				<Route path="/springburn" component={Springburn} />
				<Route path="/east-end" component={EastEnd} />
				<Route path="/easter-house" component={EasterHouse} />

				{/* <Route path="/contact" component={Contact} /> */}
				{/* <Route path="/courses" component={Courses} /> */}
			</div>
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
