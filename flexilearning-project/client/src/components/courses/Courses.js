import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
	coursesContainer: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginTop: '1rem'
	},
	centreCard: {
		padding: '1rem'
	},
	card: {
		width: '33vw',
		marginTop: '1rem'
	},
	title: {
		fontSize: 14
	},
	cardStyle: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	cardImage: {
		width: '30%',
		margin: 'auto',
		padding: '1rem'
	}
});

class Courses extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.coursesContainer}>
				<div className={classes.centreCard}>
					<Link component={RouterLink} to="/college-certification">
						<Card className={classes.card}>
							<CardContent className={classes.cardStyle}>
								<Typography variant="h5" component="h2">
									College Certification
								</Typography>
								<img
									className={classes.cardImage}
									src="https://image.flaticon.com/icons/svg/1651/1651688.svg"
								/>
							</CardContent>
						</Card>
					</Link>
					<Link component={RouterLink} to="/sqa-certification">
						<Card className={classes.card}>
							<CardContent className={classes.cardStyle}>
								<Typography variant="h5" component="h2">
									SQA Certification
								</Typography>
								<img
									className={classes.cardImage}
									src="https://image.flaticon.com/icons/svg/1651/1651688.svg"
								/>
							</CardContent>
						</Card>
					</Link>
				</div>
				<div className={classes.centreCard}>
					<Link component={RouterLink} to="/ecdl">
						<Card className={classes.card}>
							<CardContent className={classes.cardStyle}>
								<Typography variant="h5" component="h2">
									ECDL Certificate {' '}
								</Typography>
								<img
									className={classes.cardImage}
									src="https://image.flaticon.com/icons/svg/1651/1651688.svg"
								/>
							</CardContent>
						</Card>
					</Link>
					<Link component={RouterLink} to="/codeworks">
						<Card className={classes.card}>
							<CardContent className={classes.cardStyle}>
								<Typography variant="h5" component="h2">
									Codeworks Programme{' '}
								</Typography>
								<img
									className={classes.cardImage}
									src="https://image.flaticon.com/icons/svg/1651/1651688.svg"
								/>
							</CardContent>
						</Card>
					</Link>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Courses);
