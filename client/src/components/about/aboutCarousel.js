import React from 'react';
import Slider from 'react-slick';

class AboutCarousel extends React.Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings}>
				<div className="about-container">
					<img
						className="about-carousel"
						src={'https://i.ibb.co/dWBgYfz/EH2.jpg'}
						alt="College FlexiLearner"
					/>
				</div>
				<div>
					<img
						className="about-carousel"
						src={'https://i.ibb.co/DMsG9mt/EH6.jpg'}
						alt="College FlexiLearner"
					/>
				</div>
				<div>
					<img
						className="about-carousel"
						src={'https://i.ibb.co/Xsm4KL8/EH-1.jpg'}
						alt="College FlexiLearner"
					/>
				</div>
			</Slider>
		);
	}
}
export default AboutCarousel;
