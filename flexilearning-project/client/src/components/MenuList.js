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

class MenuList extends React.Component {
	state = {
		open: true
	};

	handleClick = () => {
		this.setState((state) => ({ open: !state.open }));
	};

	render() {
		const { classes } = this.props;

		return (
			<List component="nav" className={classes.root}>
				<ListItem button>
					<ListItemIcon />
					<ListItemText inset primary="About Us" />
				</ListItem>
				<ListItem button onClick={this.handleClick}>
					<ListItemIcon />
					<ListItemText inset primary="Campus" />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="Springburn" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="East End" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="EasterHouse" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="West End" />
						</ListItem>
					</List>
				</Collapse>
				<ListItem button onClick={this.handleClick}>
					<ListItemIcon />
					<ListItemText inset primary="Courses" />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="Young Scot - Digi Know?" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="Codeworks" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="Information Technology (IT) for Employability" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="National Progession Award (NPA) Digital Literacy" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="National Progession Award (NPA) Digital Passport" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="National Progession Award (NPA) Internet Technology" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="Introduction to Online Sales" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="Queens Cross Housing" />
						</ListItem>
					</List>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText inset primary="Youth Access" />
						</ListItem>
					</List>
				</Collapse>
				<ListItem button>
					<ListItemIcon />
					<ListItemText inset primary="Student Account" />
				</ListItem>
				<ListItem button>
					<ListItemIcon />
					<ListItemText inset primary="Contact" />
				</ListItem>
			</List>
		);
	}
}

MenuList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuList);
