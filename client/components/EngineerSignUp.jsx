import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
		$.ajax({
			type: 'POST',
			url: '/signupEngineer',
			data: that.state,
			dataType: 'json'
		});
		<NavLink to="/signupEngineer"> </NavLink>;
	}

	render() {
		return (
			<div>
				<Link to="/">
					<button value="Go Back home">Go Back home</button>
				</Link>{' '}
				<br /> <br />
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
				<Link to="/signinEngineer">
					<button value="Already Signed up? Sign In">Already Signed up? Sign In</button>
				</Link>
			</div>
		);
	}
}

export default EngineerSignUp;
