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
		$.ajax({
			type: 'POST',
			url: '/signinEngineer',
			data: that.state,
			dataType: 'json',
			success: function success(data) {
				console.log(data);
			},
			error: function error(error){
				console.log(error)
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
				<input type="text" name="username" placeholder="userName" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<input type="password" name="password" placeholder="password" onChange={this.changed.bind(this)} />
				<br />
				<br />
				<button onClick={this.engineerSignIn}>Sign In</button>
			</div>
		);
	}
}

export default EngineerSignIn;
