import React, { Component } from 'react';
import HomeCarousel from './components/HomeCarousel';

class App extends Component {
	render() {
		return (
			<div>
				<h1 className="homeText">COMMUNITY LEARNING</h1>
				<p className="homeText">
					The Glasgow Kelvin College ethos includes commitments to decentralisation and outreach and improving
					outreach and equality of opportunity.{' '}
				</p>
				<HomeCarousel />
			</div>
		);
	}
}

export default App;
