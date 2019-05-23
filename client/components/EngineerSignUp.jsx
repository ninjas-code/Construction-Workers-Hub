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
				<NavLink to="/" activeStyle={{ color: 'white' }}>
					<h2 id="homeButton">Home</h2>
				</NavLink>
				{this.state.toggleSignUp ? (
					<div>
						<h1 style={{ margin: '10px', display: 'block', color: 'darkorange', fontSize: '25px' }}>
							Sign Up for Engineers
						</h1>
						<br />
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
						<button className="Button" onClick={this.engineerSignUp.bind(this)}>
							Sign Up
						</button>
						<br />
						<NavLink to="/signinEngineer" activeStyle={{ color: 'purple' }}>
							<button value="Already Signed up? Sign In" className="Button">
								Already Signed up? Sign In Here
							</button>
						</NavLink>
					</div>
				) : (
					<EngineerSignIn />
				)}
			</div>
		);
	}
}

export default EngineerSignUp;
