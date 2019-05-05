import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className="main-container">
				<h2> Community Learning</h2>
				<p>
					The{' '}
					<a href="https://www.glasgowkelvin.ac.uk/college-ethos/" target="_blank" rel="noopener noreferrer">
						Glasgow Kelvin College ethos{' '}
					</a>includes commitments to decentralisation and outreach and improving outreach and equality of
					opportunity.
				</p>
				<p>
					The College would be unable to serve its local communities without working in partnership with other
					community learning organisations, many of which are listed in these pages.
				</p>
				<p>
					The College is committed to supporting development of capacity for its community learning and
					development partners and works where possible to extend its own capacity to others - this includes
					the extension of its technical infrastructure through the{' '}
					<a href="http://www.northeastglasgow.co.uk/john-wheatley-learning-network">
						John Wheatley Learning Network
					</a>, through its{' '}
					<a
						href="https://www.glasgowkelvin.ac.uk/wordpress/wp-content/uploads/policies/GKC-LettingPolicy.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						letting policy{' '}
					</a>which makes available for community groups at no charge access to its facilities, through the
					co-delivery partnership method which underpins the Community Achievement Awards programme and
					through its work-based community learning and development programmes: HNC Working with Communities,
					NC Introduction to Community Development and the Professional Development Award in Youth Work.
				</p>
			</div>
		);
	}
}

export default About;
