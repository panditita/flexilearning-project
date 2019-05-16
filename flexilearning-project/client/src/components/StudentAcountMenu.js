import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4
	}
});

class StudentAcountMenu extends React.Component {
	constructor() {
		super();
		this.state = {
			openCampus: false,
			openCourses: false,
			openCodeworks: false
		};
	}

	handleClick = () => {
		this.handleClick = (nav) => {
			this.setState({
				['open' + nav]: !this.state['open' + nav]
			});
		};
	};

	logOut(e) {
		e.preventDefault();
		localStorage.removeItem('usertoken'); //studenttoke?
		this.props.history.push('/student-login');
	}

	render() {
		const { classes } = this.props;

		const studentLink = {};
		return (
			<List component="nav" className={classes.root}>
				<ListItem button>
					<ListItemIcon />
					<Link component={RouterLink} to="/logout">
						<ListItemText inset primary="About Us" />
					</Link>
				</ListItem>
				<ListItem
					button
					onClick={() => {
						this.handleClick('Campus');
					}}
				>
					<ListItemIcon />
					<Link component={RouterLink} to="/campus">
						<ListItemText inset primary="Campus" />
					</Link>
					{this.state.openCampus ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.openCampus} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/springburn">
								<ListItemText inset primary="Springburn" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/east-end">
								<ListItemText inset primary="East End" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/easter-house">
								<ListItemText inset primary="Easter House" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/west-end">
								<ListItemText inset primary="West End" />
							</Link>
						</ListItem>
					</List>
				</Collapse>
				<ListItem
					button
					onClick={() => {
						this.handleClick('Courses');
					}}
				>
					<ListItemIcon />
					<Link component={RouterLink} to="/courses">
						<ListItemText inset primary="Courses" />
					</Link>
					{this.state.openCourses ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.openCourses} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-word">
								<ListItemText inset primary="Introduction and Intermediate Word Processing" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-spreadsheets">
								<ListItemText inset primary="Introduction and Intermediate Spreadsheets" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-presentation">
								<ListItemText inset primary="Introduction and Intermediate Presentation Software" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-databases">
								<ListItemText inset primary="Introduction and Intermediate Database" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-email">
								<ListItemText inset primary="Introduction and Intermediate Email" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-file">
								<ListItemText inset primary="Introduction to File Management" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-mobileApps">
								<ListItemText inset primary="Introduction and Intermediate Mobile App Development" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-office365">
								<ListItemText inset primary="Introduction to Office 365 Web Apps" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-coding">
								<ListItemText inset primary="Introduction to Coding" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-cybersec">
								<ListItemText inset primary="Introduction to Cyber Security" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-webdev">
								<ListItemText inset primary="Introduction to Web Development" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-internet">
								<ListItemText inset primary="Introduction to the Internet of Things" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-digmarket">
								<ListItemText inset primary="Introduction to Digital Marketing" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-digmarket">
								<ListItemText inset primary="Introduction to Digital Marketing" />
							</Link>
						</ListItem>
					</List>
				</Collapse>

				<ListItem
					button
					onClick={() => {
						this.handleClick('Codeworks');
					}}
				>
					<ListItemIcon />
					<Link component={RouterLink} to="/codeworks">
						<ListItemText inset primary="Codeworks Programme" />
					</Link>
					{this.state.openCodeworks ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.openCodeworks} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/intro-codeworks">
								<ListItemText inset primary="Getting Started with Codeworks" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/codeworks-digital">
								<ListItemText inset primary="Codeworks Digital " />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/codeworks-dev">
								<ListItemText inset primary="Codeworks Developer" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<Link component={RouterLink} to="/codeworks-pro">
								<ListItemText inset primary="Codeworks Pro" />
							</Link>
						</ListItem>
					</List>
				</Collapse>
				<ListItem button>
					<ListItemIcon />
					<Link component={RouterLink} to="/student-login">
						<ListItemText inset primary="Student Login" />
					</Link>
				</ListItem>
				<ListItem button>
					<ListItemIcon />
					<Link component={RouterLink} to="/contact">
						<ListItemText inset primary="Contact" />
					</Link>
				</ListItem>
			</List>
		);
	}
}

debugger;

MenuList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuList);