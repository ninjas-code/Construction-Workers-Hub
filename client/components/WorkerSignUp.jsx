import React from 'react';
import { Link } from 'react-router-dom';
class WorkerSignUp extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">
					<button value="Go Back home">Go Back home</button>
				</Link>{' '}
				<br />
				<br />
				<input type="text" name="fullname" placeholder="fullName" />
				<br />
				<br />
				<input type="text" name="username" placeholder="userName" />
				<br />
				<br />
				<input type="text" name="password" placeholder="password" />
				<br />
				<br />
				<input type="text" name="phonenumber" placeholder="Phone Number" />
				<br />
				<br />
				<input type="text" name="role" placeholder="role" />
				<br />
				<br />
				<button>Sign Up</button>
			</div>
		);
	}
}

export default WorkerSignUp;
