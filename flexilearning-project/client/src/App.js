import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<NavBar />
			</div>
		);
	}
}

export default App;
