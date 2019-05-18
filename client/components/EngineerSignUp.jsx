import React from 'react';
import { Link } from 'react-router-dom';

class EngineerSignUp extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">
					<button value="Go Back home">Go Back home</button>
				</Link>{' '}
				<br /> <br />
				<input type="text" name="fullname" placeholder="fullName" /> <br />
				<br />
				<input type="text" name="username" placeholder="userName" />
				<br />
				<br />
				<input type="text" name="password" placeholder="password" />
				<br />
				<br />
				<input type="text" name="sitelocation" placeholder="Site Location" />
				<br />
				<br />
				<input type="text" name="phonenumber" placeholder="Phone Number" />
				<br />
				<br />
				<br />
				<button>Sign Up</button>
			</div>
		);
	}
}

export default EngineerSignUp;
