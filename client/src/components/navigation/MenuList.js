import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing.unit * 6
	}
});

class MenuList extends React.Component {
	constructor() {
		super();
		this.state = {
			openCampus: false,
			openCourses: false,
			openCodeworks: false,
			openStudent: false
		};
	}

	handleClick = () => {
		this.handleClick = (nav) => {
			this.setState({
				['open' + nav]: !this.state['open' + nav]
			});
		};
	};

	render() {
		const { classes } = this.props;

		return (
			<List component="nav" className={classes.root}>
				<ListItem button>
					<Link component={RouterLink} to="/about-us">
						<ListItemText inset primary="About Us" />
					</Link>
				</ListItem>
				<ListItem
					button
					onClick={() => {
						this.handleClick('Campus');
					}}
				>
					<Link component={RouterLink} to="/campus">
						<ListItemText inset primary="Campus" />
					</Link>
					{this.state.openCampus ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.openCampus} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/springburn">
								<ListItemText inset primary="Springburn" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/east-end">
								<ListItemText inset primary="East End" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/easter-house">
								<ListItemText inset primary="Easter House" />
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
					<Link component={RouterLink} to="/courses">
						<ListItemText inset primary="Courses" />
					</Link>
					{this.state.openCourses ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.openCourses} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/college-certification">
								<ListItemText inset primary="College Certification" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/sqa-certification">
								<ListItemText inset primary="SQA Certification" />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/ecdl">
								<ListItemText inset primary="European Computer Driving Licence " />
							</Link>
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/codeworks">
								<ListItemText inset primary="Codeworks Programme" />
							</Link>
						</ListItem>
					</List>
				</Collapse>
				<ListItem
					button
					onClick={() => {
						this.handleClick('Student');
					}}
				>
					<Link component={RouterLink} to="/student-login">
						<ListItemText inset primary="Student Account" />
					</Link>
					{this.state.openStudent ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.openStudent} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<Link component={RouterLink} to="/student-register">
								<ListItemText inset primary="Register" />
							</Link>
						</ListItem>
					</List>
				</Collapse>
				<ListItem button>
					<Link component={RouterLink} to="/contact">
						<ListItemText inset primary="Contact" />
					</Link>
				</ListItem>
			</List>
		);
	}
}

MenuList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuList);
