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
	createData('Unit 1 – IT Security'),
	createData('Unit 2 – IT User Fundamentals'),
	createData('Unit 3 – Word Processing'),
	createData('Unit 4 - Spreadsheets'),
	createData('Unit 5 - Databases'),
	createData('Unit 6 - Presentations'),
	createData('Unit 7 – Internet & Email')
];

class Ecdl extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<div className={classes.text}>
					<h3>European Computer Driving Licence</h3>
					<Typography paragraph>
						The European Computer Driving Licence is an SCQF level 5 course made up of 7 units. All 7 units
						must be completed to achieve your certificate. The units are mainly practical - from using
						office applications, managing files and using the internet and email applications. There are
						also a couple of units which require you to demonstrate knowledge and understanding of IT
						security and the fundamentals of using the operating system.
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

export default withStyles(styles)(Ecdl);
