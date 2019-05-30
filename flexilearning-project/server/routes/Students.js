const cors = require('cors');
const router = require('express').Router();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Student = require('../models/Student');

const students = express.Router();
students.use(cors());
process.env.SECRET_KEY = 'secret';

router.get('/student-login', (req, res) => {
	const user = Student.find();
	console.log(user);
});

students.post('/student-register', (req, res) => {
	const today = new Date();
	const studentData = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		created: today
	};
	Student.findOne({
		email: req.body.email
	})
		.then((student) => {
			if (!student) {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					studentData.password = hash;
					Student.create(studentData)
						.then((student) => {
							res.json({ status: student.email + ' has been registered succesfully!' });
						})
						.catch((err) => {
							res.send('error: ' + err);
						});
				});
			} else {
				res.json({ error: 'You have already registered' });
			}
		})
		.catch((err) => {
			res.send('error: ' + err);
		});
});

students.post('/student-login', (req, res) => {
	Student.findOne({
		email: req.body.email
	})
		.then((student) => {
			if (student) {
				if (bcrypt.compareSync(req.body.password, student.password)) {
					const payload = {
						_id: student._id,
						firstName: student.firstName,
						lastName: student.lastName,
						email: student.email
					};
					let token = jwt.sign(payload, process.env.SECRET_KEY, {
						expiresIn: 1440
					});
					res.send(token);
				} else {
					res.json({ error: "This student account doesn't exists" });
				}
			} else {
				res.json({ error: "This student account doesn't exists" });
			}
		})
		.catch((err) => {
			res.send('error: ' + err);
		});
});

students.get('/student-profile', (req, res) => {
	//const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

	Student.findOne({
		email: req.body.email
	})
		.then((student) => {
			if (student) {
				res.json('Welcome ' + student.firstName);
			} else {
				res.send("This student account doesn't exists");
			}
		})
		.catch((err) => {
			releaseEvents.send('error: ' + err);
		});
});
module.exports = students;
