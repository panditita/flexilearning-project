import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
	cardOne: {
		maxWidth: '80vw',
		height: '25vh',
		marginTop: '4rem',
		backgroundImage: `url('https://www.glasgowkelvin.ac.uk/wp-content/uploads/layerslider/Resort/springburn-outer.jpg')`
	},
	textCampus: {
		fontSize: '5rem',
		textAlign: 'center',
		color: '#EE3C95',
		fontWeight: 'bold'
	},
	cardTwo: {
		maxWidth: '80vw',
		height: '25h',
		marginTop: '1rem',
		backgroundImage: `url('https://www.glasgowkelvin.ac.uk/wp-content/uploads/layerslider/Resort/east2.jpg')`,
		backgroundPosition: 'center'
	},
	cardThree: {
		maxWidth: '80vw',
		height: '25vh',
		marginTop: '1rem',
		backgroundImage: `url('https://www.glasgowkelvin.ac.uk/wp-content/uploads/layerslider/Resort/easterhouse-back.jpg')`,
		backgroundPosition: 'center'
	}
});

class CampusCard extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Link component={RouterLink} to="/springburn">
					<Card className={classes.cardOne}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" className={classes.textCampus}>
								SPRINGBURN CAMPUS
							</Typography>
						</CardContent>
					</Card>
				</Link>
				<Link component={RouterLink} to="/east-end">
					<Card className={classes.cardTwo}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" className={classes.textCampus}>
								EAST END CAMPUS
							</Typography>
						</CardContent>
					</Card>
				</Link>
				<Link component={RouterLink} to="/easter-house">
					<Card className={classes.cardThree}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" className={classes.textCampus}>
								EASTER HOUSE CAMPUS
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</div>
		);
	}
}

CampusCard.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CampusCard);
