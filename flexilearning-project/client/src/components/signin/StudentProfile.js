import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}
/* function handleChange(event, newValue) {
	setValue(newValue);
} */

function logOut(e) {
	e.preventDefault();
	localStorage.removeItem('studenttoken'); //studenttoke?
	this.props.history.push('/student-login');
}

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	}
});

class NavTabs extends React.Component {
	render() {
		const { classes } = this.props;
		//const [ value, setValue ] = React.useState(0);

		return (
			<ThemeProvider className={classes.theme}>
				<div className={classes.root}>
					<AppBar position="static">
						<Tabs variant="fullWidth">
							{/* value={value} onChange={handleChange} */}
							<LinkTab label="My Profile" href="/student-profile" />
							<a href="" onClick={this.logOut.bind()} label="Log out" href="/student-logout" />
						</Tabs>
					</AppBar>
					{/* {value === 0 && <TabContainer>Student Profile</TabContainer>} */}
				</div>
			</ThemeProvider>
		);
	}
}

export default NavTabs;
