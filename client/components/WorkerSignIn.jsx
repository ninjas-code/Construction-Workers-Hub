import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkerSignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
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
			url: 'signinWorker',
			data: that.state,
			success: function success(data) {
				console.log(data);
			},
			dataType: 'json'
		});
	}
	render() {
		return (
			<div>
				<Link to="/">
					<button value="Go Back home">Go Back home</button>
				</Link>{' '}
				<h1>Hello</h1>
				<input type="text" name="username"  placeholder="userName" onChange={this.onChange.bind(this)} />
				<br />
				<br />
				<input type="password" name="password"  placeholder="password" onChange={this.onChange.bind(this)} />
				<button onClick={this.clicked.bind(this)}>Sign In</button>
			</div>
		);
	}
}

export default WorkerSignIn;
