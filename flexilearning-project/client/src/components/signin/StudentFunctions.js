import axios from 'axios';

export const register = (newStudent) => {
	return axios
		.post('students/student-register', {
			firstName: newStudent.firstName,
			lastName: newStudent.lastName,
			email: newStudent.email,
			password: newStudent.password
		})
		.then((res) => {
			console.log('Registered!');
		});
};

export const login = (user) => {
	return axios
		.post('students/student-login', {
			email: newStudent.email,
			password: newStudent.password
		})
		.then((res) => {
			localStorag.setItem('studenttoken', res.data);
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};
