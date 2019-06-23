import React from 'react';
import Slider from 'react-slick';

class HomeCarousel extends React.Component {
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
				<div>
					<img
						src={'http://i66.tinypic.com/2eef09h.jpg'}
						alt="College FlexiLearner"
						className="home-carousel"
					/>
				</div>
				<div>
					<img
						src={'http://i68.tinypic.com/jfayhw.jpg'}
						alt="College FlexiLearner"
						className="home-carousel"
					/>
				</div>
				<div>
					<img
						src={'http://i68.tinypic.com/mj8lc3.jpg'}
						alt="College FlexiLearner"
						className="home-carousel"
					/>
				</div>
				<div>
					<img
						src={'http://i63.tinypic.com/msdm4j.jpg'}
						alt="College FlexiLearner"
						className="home-carousel"
					/>
				</div>
				<div>
					<img
						src={'http://i64.tinypic.com/2a6w8eq.jpg'}
						alt="College FlexiLearner"
						className="home-carousel"
					/>
				</div>
				<div>
					<img
						src={'http://i67.tinypic.com/124ge8i.jpg'}
						alt="College FlexiLearner"
						className="home-carousel"
					/>
				</div>
			</Slider>
		);
	}
}
export default HomeCarousel;
