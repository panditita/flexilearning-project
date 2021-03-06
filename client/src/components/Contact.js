import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
//import { DisplayFormikState } from './formikHelper';

const styles = {
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '30vw',
		margin: 'auto'
	},
	title: {
		fontSize: '1.25rem',
		fontWeight: 'bold',
		marginTop: '3rem'
	}
};

const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

function Contact(props) {
	const { classes } = props;
	const [ setOpen ] = useState(false);
	const [ isSubmitionCompleted, setSubmitionCompleted ] = useState(false);

	function handleClose() {
		setOpen(false);
	}

	return (
		<React.Fragment>
			{!isSubmitionCompleted && (
				<React.Fragment>
					<Typography className={classes.title} align="center">
						Contact Glasgow Kelvin College
					</Typography>
					<Typography align="center">Phone: 0141 630 5000 Fax: 0141 630 5001</Typography>
					<Typography align="center">Main address: 123 Flemington St Glasgow G21 4TD</Typography>
					<Typography align="center">Email: info@glasgowkelvin.ac.uk</Typography>
					<Formik
						initialValues={{ email: '', name: '', comment: '' }}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(true);
							axios
								.post(contactFormEndpoint, values, {
									headers: {
										'Access-Control-Allow-Origin': '*',
										'Content-Type': 'application/json'
									}
								})
								.then((resp) => {
									setSubmitionCompleted(true);
								});
						}}
						validationSchema={Yup.object().shape({
							email: Yup.string().email().required('Required'),
							name: Yup.string().required('Required'),
							comment: Yup.string().required('Required')
						})}
					>
						{(props) => {
							const {
								values,
								touched,
								errors,
								dirty,
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit,
								handleReset
							} = props;
							return (
								<form className={classes.form} onSubmit={handleSubmit}>
									<TextField
										label="name"
										name="name"
										className={classes.textField}
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={errors.name && touched.name && errors.name}
										margin="normal"
									/>

									<TextField
										error={errors.email && touched.email}
										label="email"
										name="email"
										className={classes.textField}
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={errors.email && touched.email && errors.email}
										margin="normal"
									/>

									<TextField
										label="comment"
										name="comment"
										className={classes.textField}
										value={values.comment}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={errors.comment && touched.comment && errors.comment}
										margin="normal"
									/>
									<DialogActions>
										<Button
											type="button"
											className="outline"
											onClick={handleReset}
											disabled={!dirty || isSubmitting}
										>
											Reset
										</Button>
										<Button type="submit" disabled={isSubmitting}>
											Submit
										</Button>
										{/* <DisplayFormikState {...props} /> */}
									</DialogActions>
								</form>
							);
						}}
					</Formik>
				</React.Fragment>
			)}
			{isSubmitionCompleted && (
				<React.Fragment>
					<DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
					<DialogContent>
						<DialogContentText>Thanks</DialogContentText>
						<DialogActions>
							<Button type="button" className="outline" onClick={handleClose}>
								Back to app
							</Button>
							{/* <DisplayFormikState {...props} /> */}
						</DialogActions>
					</DialogContent>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default withStyles(styles)(Contact);
