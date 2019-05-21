import React from 'react';
import { Link } from 'react-router-dom';
import EngineerMainPage from './EngineerMainPage.jsx';

class EngineerSignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			fullName: '',
			phoneNumber: '',
			toggleSignIn: true,
			toggleEngpage: false,
			token: '',
			siteLocation: ''
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
					that.setState(
						{ toggleSignIn: false, toggleEngpage: true, token: body.token, password: '', username: '' },
						() => {
							that.engineerPage(that);
						}
					);
				});
			} else {
				console.log('err');
			}
		});
	}

	engineerPage(that) {
		fetch('/engineerPage', {
			method: 'get',
			headers: { 'x-access-token': that.state.token }
		}).then(function(response) {
			if (response.status == 200) {
				response.json().then((body) => {
					that.setState({
						fullName: body.fullName,
						phoneNumber: body.phoneNumber,
						siteLocation: body.siteLocation
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
						phoneNumber={this.state.phoneNumber}
						token={this.state.token}
						siteLocation={this.state.siteLocation}
					/>
				)}
			</div>
		);
	}
}

export default EngineerSignIn;
