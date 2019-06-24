import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Login from './components/signin/Login';
import NavBar from './components/navigation/NavBar';
import Courses from './components/courses/Courses';
import Contact from './components/Contact';
import StudentProfile from './components/signin/StudentProfile';
import Springburn from './components/campus/Springburn';
import EastEnd from './components/campus/EastEnd';
import EasterHouse from './components/campus/EasterHouse';
import CollegeCertification from './components/courses/CollegeCertification';
import Sqa from './components/courses/Sqa';
import Ecdl from './components/courses/Ecdl';
import Codeworks from './components/courses/Codeworks';
import Register from './components/register/Register';
import * as serviceWorker from './serviceWorker';

import './App.css';

const routing = (
	<Router>
		<div className="main-container">
			<NavBar />
			<Route exact path="/" component={App} />
			<div className="app-container">
				<Route path="/student-login" component={Login} />
				<Route path="/about-us" component={About} />
				<Route path="/campus" component={Campus} />
				<Route path="/student-profile" component={StudentProfile} />
				<Route path="/springburn" component={Springburn} />
				<Route path="/east-end" component={EastEnd} />
				<Route path="/easter-house" component={EasterHouse} />
				<Route path="/courses" component={Courses} />
				<Route path="/college-certification" component={CollegeCertification} />
				<Route path="/sqa-certification" component={Sqa} />
				<Route path="/ecdl" component={Ecdl} />
				<Route path="/codeworks" component={Codeworks} />
				<Route path="/student-register" component={Register} />
				<Route path="/contact" component={Contact} />
			</div>
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
