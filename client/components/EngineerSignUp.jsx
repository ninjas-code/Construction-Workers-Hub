import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import EngineerSignIn from './EngineerSignIn.jsx';

class EngineerSignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			username: '',
			password: '',
			sitelocation: '',
			phonenumber: '',
			toggleSignUp: true,
			toggleSignIn: false
		};
	}

	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	engineerSignUp() {
		var { fullname, username, password, sitelocation, phonenumber } = this.state;
		var engineer = { fullname, username, password, sitelocation, phonenumber };
		console.log(engineer);
		var that = this;
		fetch('/signupEngineer', {
			method: 'POST',
			body: JSON.stringify(engineer),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				console.log(response.success);
				if (response.success === 'Sign up as engineer successful') {
					that.setState({
						username: '',
						password: '',
						toggleSignIn: true,
						toggleSignUp: false
					});
				} else {
					console.log(response.error);
				}
			});
	}

	render() {
		return (
			<div>
				{this.state.toggleSignUp ? (
					<div>
						<NavLink to="/" activeStyle={{ color: 'purple' }}>
							<button value="Go Back home">Go Back home</button>
						</NavLink>{' '}
						<br />
						<br />
						<h1>Sign Up for Engineers</h1>
						<input
							type="text"
							name="fullname"
							placeholder="fullName"
							onChange={this.changed.bind(this)}
						/>{' '}
						<br />
						<br />
						<input type="text" name="username" placeholder="userName" onChange={this.changed.bind(this)} />
						<br />
						<br />
						<input
							type="password"
							name="password"
							placeholder="password"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<br />
						<input
							type="text"
							name="sitelocation"
							placeholder="Site Location"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<br />
						<input
							type="number"
							name="phonenumber"
							placeholder="Phone Number"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<br />
						<br />
						<button onClick={this.engineerSignUp.bind(this)}>Sign Up</button>
						<br />
						<br />
						<NavLink to="/signinEngineer" activeStyle={{ color: 'purple' }}>
							<button value="Already Signed up? Sign In">Already Signed up? Sign In</button>
						</NavLink>
					</div>
				) : (
					<EngineerSignIn />
				)}
				{this.state.WrongPhoneNumber ? <W /> : null}
				{this.state.toggleNotOkay ? <NotOkay /> : null}
			</div>
		);
	}
}

export default EngineerSignUp;
