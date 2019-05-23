import React from 'react';
import { Link } from 'react-router-dom';
import WorkerSignIn from './WorkerSignIn.jsx';

class WorkerSignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			username: '',
			password: '',
			phonenumber: '',
			experiencelevel: '',
			expectedsalary: '',
			role: '',
			toggleSignUp: true,
			//toggleSignIn: false,
			status: ''
		};
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	clicked() {
		var that = this;
		var { fullname, username, password, phonenumber, experiencelevel, expectedsalary, role, status } = this.state;
		var info = { fullname, username, password, phonenumber, experiencelevel, expectedsalary, role, status };
		fetch('/signupWorker', {
			method: 'POST',
			body: JSON.stringify({ info }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				console.log(response);
				if (response.success === 'Sign up as worker successful') {
					that.setState({
						username: '',
						password: '',
						toggleSignUp: false,
						//toggleSignIn: true
					});
					return;
				} else {
					console.log(response.error);
					return;
				}
			});
	}

	render() {
		let role = [ 'Choose One', 'Painter', 'Carpenter', 'Stone Builder', 'Smith' ];
		const chooseRoles = role.map((option) => {
			return <option key={option}>{option}</option>;
		});

		let experienceLevel = [ 'Choose One', 'Professional', 'Intermediate', 'Beginner' ];
		const chooseExperienceLevel = experienceLevel.map((option) => {
			return <option key={option}>{option}</option>;
		});

		let status = [ 'Choose One', 'Available', 'not Available' ];
		const chooseStatus = status.map((option) => {
			return <option key={option}>{option}</option>;
		});

		return (
			<div>
				{this.state.toggleSignUp ? (
					<div>
						<Link to="/">
							<button value="Go Back home">Go Back home</button>
						</Link>{' '}
						<br />
						<br />
						<h1>Sign Up for construction Workers</h1>
						<input type="text" name="fullname" placeholder="fullName" onChange={this.onChange.bind(this)} />
						<br />
						<br />
						<input type="text" name="username" placeholder="userName" onChange={this.onChange.bind(this)} />
						<br />
						<br />
						<input
							type="password"
							name="password"
							placeholder="password"
							onChange={this.onChange.bind(this)}
						/>
						<br />
						<br />
						<input
							type="number"
							name="phonenumber"
							placeholder="079-123-4567"
							onChange={this.onChange.bind(this)}
						/>
						<br />
						<br />
						<select name="experiencelevel" onChange={this.onChange.bind(this)}>
							{chooseExperienceLevel}
						</select>
						<br />
						<br />
						<input
							type="number"
							name="expectedsalary"
							placeholder="expected salary"
							onChange={this.onChange.bind(this)}
						/>{' '}
						JD
						<br />
						<br />
						<select name="role" onChange={this.onChange.bind(this)}>
							{chooseRoles}
						</select>
						<br />
						<br />
						<select name="status" onChange={this.onChange.bind(this)}>
							{chooseStatus}
						</select>
						<br />
						<br />
						<button id="signUpWorker" onClick={this.clicked.bind(this)}>
							Sign Up
						</button>
						<Link to="/signinWorker">
							<button value="sign In as a construction Worker">Sign In</button>
						</Link>
					</div>
				) : (
					<WorkerSignIn />
				)}
			</div>
		);
	}
}

export default WorkerSignUp;
