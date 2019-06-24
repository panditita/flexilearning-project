import axios from 'axios';

export const register = (newStudent) => {
	return axios
		.post('/student-register', {
			firstName: newStudent.firstName,
			lastName: newStudent.lastName,
			email: newStudent.email,
			password: newStudent.password
		})
		.then((res) => {
			console.log('Registered!');
		});
};

export const login = (student) => {
	return axios
		.post('/student-login', {
			email: student.email,
			password: student.password
		})
		.then((res) => {
			localStorage.setItem('studentToken', res.data);
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};
