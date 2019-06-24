import React from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import { Typography, Paper, Grid, Button, CssBaseline } from '@material-ui/core';

const onSubmit = async (values) => {
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await sleep(300);
	window.alert(JSON.stringify(values, 0, 2));
};
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
	render() {
		return (
			<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
				<CssBaseline />
				<Typography variant="h4" align="center" component="h1" gutterBottom>
					Register{' '}
				</Typography>
				<Form
					onSubmit={onSubmit}
					validate={validate}
					render={({ handleSubmit, reset, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit} noValidate>
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
