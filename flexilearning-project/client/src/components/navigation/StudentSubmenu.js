import React from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';

//import Link from '@material-ui/core/Link';

class StudentSubmenu extends React.Component {
	logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('studentToken');
		this.props.history.push('/student-login');
	};

	render() {
		const loginRegLink = (
			<ul>
				<Link component={RouterLink} to="/student-login">
					<Button color="primary" className="menuButton">
						{' '}
						Student Login {' '}
					</Button>
				</Link>
				<Link component={RouterLink} to="/student-register">
					<Button color="primary" className="menuButton">
						{' '}
						Register {' '}
					</Button>
				</Link>
			</ul>
		);

		const studentLink = (
			<ul>
				<Link to="/student-profile">Student </Link>
				<a href="" onClick={this.logOut.bind(this)}>
					Logout
				</a>
			</ul>
		);
		return <div className="localStorage">{localStorage.studentToken ? studentLink : loginRegLink}</div>;
	}
}
export default withRouter(StudentSubmenu);
