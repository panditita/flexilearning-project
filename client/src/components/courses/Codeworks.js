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

function createData(name, Certification) {
	return { name, Certification };
}

const rows = [
	createData('Getting Started with Codeworks', 'NPA Digital Literacies – SCQF Level 3'),
	createData('Codeworks Digital', 'NPA PC Passport – Web Apps – SCQF Level 4'),
	createData('Codeworks Developer', 'Codeworks Developer Certificate'),
	createData('Codeworks Pro', 'PDA Web Development')
];

class Codeworks extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<div className={classes.text}>
					<h3>Codeworks Pro</h3>
					<Typography paragraph>
						{' '}
						A range of free and accredited digital skills courses designed to suit you. From the basics to
						help get you back in to work to coding for a career boost, Codeworks is learning that fits your
						lifestyle. Codeworks is made possible thanks to the generous support of the J.P. Morgan Chase
						Foundation.
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

export default withStyles(styles)(Codeworks);
