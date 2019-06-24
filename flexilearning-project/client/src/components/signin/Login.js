import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { login } from './StudentFunctions';

const styles = (theme) => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit
	},
	button: {
		marginTop: theme.spacing.unit * 3
	}
});

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const student = {
			email: this.state.email,
			password: this.state.password
		};

		login(student).then((res) => {
			if (res) {
				this.props.history.push('/student-profile');
			}
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<main className={classes.main}>
				<CssBaseline />
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} onSubmit={this.onSubmit}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">Email Address</InputLabel>
							<Input
								id="email"
								name="email"
								autoComplete="email"
								autoFocus
								value={this.state.email}
								onChange={this.onChange}
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								name="password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={this.state.password}
								onChange={this.onChange}
							/>
						</FormControl>
						<FormControlLabel control={<Checkbox value="remember" />} label="Remember me" />
						<Button type="submit" fullWidth variant="contained" className={classes.button}>
							Sign in
						</Button>
						<Typography>
							Not register yet?, create an account{' '}
							<Link component={RouterLink} to="/student-register">
								{' '}
								here{' '}
							</Link>
						</Typography>
					</form>
				</Paper>
			</main>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
