import React from 'react';
import { Link } from 'react-router-dom';

class WorkerSignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			fullname: '',
			username: '',
			password: '',
			phonenumber: '',
			experiencelevel: '',
			expectedsalary: '',
			role: ''
		};
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	clicked() {
		console.log(this.state);
		var that = this;
		//workerSignUp
		$.ajax({
			type: 'POST',
			url: 'signupWorker',
			data: that.state,
			dataType: 'json',
			success: (data) => {
				console.log(data);
			}
		});
	}
	render() {
		return (
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
				<input type="password" name="password" placeholder="password" onChange={this.onChange.bind(this)} />
				<br />
				<br />
				<input type="text" name="phonenumber" placeholder="Phone Number" onChange={this.onChange.bind(this)} />
				<br />
				<br />
				<input
					type="text"
					name="experiencelevel"
					placeholder="experience level"
					onChange={this.onChange.bind(this)}
				/>
				<br />
				<br />
				<input
					type="number"
					name="expectedsalary"
					placeholder="expected salary"
					onChange={this.onChange.bind(this)}
				/>
				<br />
				<p>ex: Smith or Carpenter</p>
				<input type="text" name="role" placeholder="role" onChange={this.onChange.bind(this)} />
				<br />
				<br />
				<button id="signUpWorker" onClick={this.clicked.bind(this)}>
					Sign Up
				</button>
				<Link to="/signinWorker">
					<button value="sign In as a construction Worker">Sign In</button>
				</Link>
			</div>
		);
	}
}

export default WorkerSignUp;
