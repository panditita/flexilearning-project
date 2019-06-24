import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	root: {
		width: '50vw',
		margin: '2rem auto auto auto',
		overflowX: 'auto'
	},
	table: {
		minWidth: 650,
		fontSize: '20px'
	},
	text: {
		margin: '0 1rem',
		textAlign: 'justify'
	}
});

function createData(name) {
	return { name };
}

const rows = [
	createData('Introduction and Intermediate Word Processing'),
	createData('Introduction and Intermediate Spreadsheets'),
	createData('Introduction and Intermediate Presentation Software'),
	createData('Introduction and Intermediate Database'),
	createData('Introduction and Intermediate Email'),
	createData('Introduction and Intermediate Internet'),
	createData('Introduction to File Management'),
	createData('Introduction and Intermediate Mobile App Development'),
	createData('Introduction to Office 365 Web Apps'),
	createData('Introduction to Coding'),
	createData('Introduction to Cyber Security'),
	createData('Introduction to Web Development'),
	createData('Introduction to the Internet of Things'),
	createData('Introduction to Digital Marketing')
];

class CollegeCertification extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<div className={classes.text}>
					<h3>College Certification</h3>
					<Typography paragraph>
						Learners can take a range of courses at different levels and receive college certification and
						recognition for learning. Introductory courses are for those with little or no experience of
						using a computer or digital device. The introductory courses cover a range of skills such as
						using office applications, file management up to developing mobile apps and web pages.
						Intermediate courses build upon skills developed through the introductory courses and will
						generally lead to preparing learners for ECDL assessments or further study in other programmes.
					</Typography>
				</div>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>
								{' '}
								<h3>Courses Available</h3>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(CollegeCertification);
