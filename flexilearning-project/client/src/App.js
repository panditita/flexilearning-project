import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<NavBar />
				<div className="main-container" />
			</div>
		);
	}
}

export default App;
