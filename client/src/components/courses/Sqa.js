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
	createData('Using A Keyboard'),
	createData('Computer Basics'),
	createData('Digital Skills'),
	createData('Computer Applications'),
	createData('PC Passport – Web Apps: Word Processing'),
	createData('PC Passport – Web Apps: Spreadsheets'),
	createData('PC Passport – Web Apps: Presentations')
];

class Sqa extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<div className={classes.text}>
					<h3>SQA Certification</h3>
					<Typography paragraph>
						The SQA units available in Flexible learning are aimed at SCQF levels 3 and 4. These units have
						been chosen as they combine well with our introductory and intermediate college certificated
						courses. The level 3 courses in Using A Keyboard and the NPA in Digital Literacies which
						comprises the Computer Basics, Digital Skills and Computer Applications units. These can be
						achieved as stand-alone units but all three must be completed to receive the NPA in Digital
						Literacies. At level 4 the PC Passport NPA again is comprised of three units: Web Apps: Word
						Processing, Web Apps: Spreadsheets and Web Apps: Presentations. These again can be achieved as
						stand-alone units but all three must be completed to receive the NPA.
					</Typography>
					<Typography paragraph>
						You can find more information about the{' '}
						<a href="https://www.sqa.org.uk/" target="_blank" rel="noopener noreferrer">
							{' '}
							SQA{' '}
						</a>{' '}
						on their website.
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

export default withStyles(styles)(Sqa);
