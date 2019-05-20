import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class EngineerSignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			username: '',
			password: '',
			sitelocation: '',
			phonenumber: ''
		};
		this.engineerSignUp = this.engineerSignUp.bind(this);
	}

	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	engineerSignUp() {
		console.log(this.state);
		var that = this;
		fetch('/signupEngineer', {
			method: 'POST',
			body: JSON.stringify(that.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => {
				console.log('Success:', response.result);
				return <Redirect to="/signinEngineer" />;
			})
			.catch((error) => console.error('Error:', error.err));
	}

	render() {
		return (
			<div>
				<NavLink to="/" activeStyle={{ color: 'purple' }}>
					<button value="Go Back home">Go Back home</button>
				</NavLink>{' '}
				<br />
				<br />
				<h1>Sign Up for Engineers</h1>
				<input type="text" name="fullname" placeholder="fullName" onChange={this.changed.bind(this)} /> <br />
				<br />
				<input type="text" name="username" placeholder="userName" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<input type="password" name="password" placeholder="password" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<input type="text" name="sitelocation" placeholder="Site Location" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<input type="number" name="phonenumber" placeholder="Phone Number" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<br />
				<button onClick={this.engineerSignUp}>Sign Up</button>
				<br />
				<br />
				<NavLink to="/signinEngineer" activeStyle={{ color: 'purple' }}>
					<button value="Already Signed up? Sign In">Already Signed up? Sign In</button>
				</NavLink>
			</div>
		);
	}
}

export default EngineerSignUp;
