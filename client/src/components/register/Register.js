import React from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import { Typography, Paper, Grid, Button, CssBaseline } from '@material-ui/core';
import { register } from '../signin/StudentFunctions';

const validate = (values) => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = 'Required';
	}
	if (!values.lastName) {
		errors.lastName = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	}
	if (!values.password) {
		errors.password = 'Required';
	}
	return errors;
};

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
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
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		};

		register(student).then((res) => {
			this.props.history.push('/student-login');
		});
	}
	render() {
		return (
			<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
				<CssBaseline />
				<Typography variant="h4" align="center" component="h1" gutterBottom>
					Register{' '}
				</Typography>
				<Form
					onSubmit={this.onSubmit}
					validate={validate}
					render={({ reset, submitting, pristine }) => (
						<form noValidate>
							<Paper style={{ padding: 16 }}>
								<Grid container style={{ height: '60vh' }} alignItems="flex-start" spacing={8}>
									<Grid item xs={6}>
										<Field
											fullWidth
											required
											name="firstName"
											component={TextField}
											type="text"
											label="First Name"
											value={this.state.firstName}
											onChange={this.onChange}
										/>
									</Grid>
									<Grid item xs={6}>
										<Field
											fullWidth
											required
											name="lastName"
											component={TextField}
											type="text"
											label="Last Name"
											value={this.state.lastName}
											onChange={this.onChange}
										/>
									</Grid>
									<Grid item xs={12}>
										<Field
											name="email"
											fullWidth
											required
											component={TextField}
											type="email"
											label="Email"
											value={this.state.email}
											onChange={this.onChange}
										/>
									</Grid>
									<Grid item xs={12}>
										<Field
											name="password"
											fullWidth
											required
											label="Password"
											type="password"
											component={TextField}
											value={this.state.password}
											onChange={this.onChange}
										/>
									</Grid>
									<Grid item style={{ margin: '16px auto' }}>
										<Button
											type="button"
											variant="contained"
											onClick={reset}
											disabled={submitting || pristine}
										>
											Reset
										</Button>
									</Grid>
									<Grid item style={{ margin: '16px auto' }}>
										<Button variant="contained" color="primary" type="submit" disabled={submitting}>
											Submit
										</Button>
									</Grid>
								</Grid>
							</Paper>
						</form>
					)}
				/>
			</div>
		);
	}
}

export default Register;
