import React from 'react';
import { Link } from 'react-router-dom';
import EngineerMainPage from './EngineerMainPage.jsx';

class EngineerSignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			fullName: '',
			phoneNumber: '',
			toggleSignIn: true,
			toggleEngpage: false,
			siteLocation: '',
			url : ''
		};
		this.engineerSignIn = this.engineerSignIn.bind(this);
	}

	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	engineerSignIn() {
		var { username, password } = this.state;
		var engineer = { username, password };
		var that = this;
		console.log(this.state);
		fetch('/signinEngineer', {
			method: 'POST',
			body: JSON.stringify(engineer),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			if (response.status == 200) {
				response.json().then((body) => {
					const token = body.token;
					localStorage.setItem('token', token);
					this.setState({username: '', password: '' , toggleSignIn: false ,
					toggleEngpage: true },
					() => {
						that.engineerPage(that);
					}
				)
				});
			} else {
				console.log('err');
			}
		});
	}

	engineerPage(that) {
		const token = localStorage.getItem('token');
		console.log(token)
		fetch('/engineerPage', {
			method: 'get',
			headers: { 'x-access-token': token }
		}).then(function(response) {
			if (response.status == 200) {
				response.json().then((body) => {
					console.log("hi")
					that.setState({
						fullName: body.fullName,
						username: body.userName,
						phoneNumber: body.phoneNumber,
						siteLocation: body.siteLocation,
						url : body.url
					});
				});
			} else {
				response.then((error) => {
					that.setState({ errorMessage: error });
				});
			}
		});
	}

	render() {
		return (
			<div>
				{this.state.toggleSignIn ? (
					<div>
						<Link to="/">
							<button value="Go Back home">Go Back home</button>
						</Link>{' '}
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
						<button onClick={this.engineerSignIn}>Sign In</button>
						<br />
						<br />
						<Link to="/engineerPage">
							<button value="Go to profile">Go to profile</button>
						</Link>
					</div>
				) : (
					<EngineerMainPage
						fullName={this.state.fullName}
						userName = {this.state.username}
						phoneNumber={this.state.phoneNumber}
						siteLocation={this.state.siteLocation}
						url = {this.state.url}
					/>
				)}
			</div>
		);
	}
}

export default EngineerSignIn;
