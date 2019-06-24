import React from 'react';
import Typography from '@material-ui/core/Typography';
import jwt_decode from 'jwt-decode';

class StudentProfile extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: ''
		};
	}

	componentDidMount() {
		const studentToken = localStorage.studentToken;
		const decoded = jwt_decode(studentToken);
		this.setState({
			firstName: decoded.firstName,
			lastName: decoded.lastName,
			email: decoded.email
		});
	}
	render() {
		return (
			<div className="studentProfile">
				<Typography>Welcome + {this.state.firstName}</Typography>
			</div>
		);
	}
}

export default StudentProfile;
