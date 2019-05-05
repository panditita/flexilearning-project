import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import MenuList from './MenuList';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3
	}
});

class NavBar extends React.Component {
	state = {
		mobileOpen: false
	};

	handleDrawerToggle = () => {
		this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
	};

	componentDidMount() {
		document.querySelector('.NavBar-toolbar-5').style.display = 'none';
	}

	changeOnClickState(nav) {
		this.setState({ handleClick: !this.state.handleClick });
	}
	render() {
		const { classes, theme } = this.props;

		const drawer = (
			<div>
				<Link component={RouterLink} to="/">
					<img
						src="https://www.nedworks.net/wp-content/uploads/2018/01/Glasgow-Kelvin-College.jpg"
						alt="Logo for Glasgow Kelvin College"
					/>
					<div className={classes.toolbar} />
				</Link>
				<List>
					<MenuList />
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<CssBaseline />
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							container={this.props.container}
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
			</div>
		);
	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
