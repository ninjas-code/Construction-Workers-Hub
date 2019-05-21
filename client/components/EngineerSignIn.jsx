import React from 'react';
import { Link } from 'react-router-dom';

class EngineerSignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.engineerSignIn = this.engineerSignIn.bind(this);
	}

	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	engineerSignIn() {
		var that = this;
		console.log(this.state);
		fetch('/signinEngineer', {
			method: 'POST',
			body: JSON.stringify(that.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((res) => {
				console.log('Success:', res.token);
			})
			.catch((error) => console.error('Error:', error.err));
	}

	render() {
		return (
			<div>
				<Link to="/">
					<button value="Go Back home">Go Back home</button>
				</Link>{' '}
				<br />
				<br />
				<input type="text" name="username" placeholder="userName" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<input type="password" name="password" placeholder="password" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<button onClick={this.engineerSignIn}>Sign In</button>
				<br />
				<br />
				<Link to="/engineerPage">
					<button value="Go to profile">Go to profile</button>
				</Link>
			</div>
		);
	}
}

export default EngineerSignIn;
