import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import WorkerMainPage from './WorkerMainPage.jsx';

class WorkerSignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			fullName: '',
			phoneNumber: '',
			toggleSignIn: true,
			toggleWorkerpage: false,
			experienceLevel: '',
			expectedSalary: '',
			role: '',
			status: '',
			url: ''
		};
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	clicked() {
		var { username, password } = this.state;
		var worker = { username, password };
		var that = this;
		fetch('/signinWorker', {
			method: 'POST',
			body: JSON.stringify(worker),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			if (response.status == 200) {
				response.json().then((body) => {
					const token = body.token;
					localStorage.setItem('token', token);

					this.setState(
						{
							username: '',
							password: '',
							toggleSignIn: false,
							toggleWorkerpage: true
						},
						() => {
							that.workerPage(that);
						}
					);
				});
			} else {
				console.log('err');
			}
		});
	}

	workerPage(that) {
		const token = localStorage.getItem('token');
		fetch('/workerPage', {
			method: 'get',
			headers: { 'x-access-token': token }
		}).then(function(response) {
			if (response.status == 200) {
				response.json().then((body) => {
					that.setState({
						fullName: body.fullName,
						phoneNumber: body.phoneNumber,
						experienceLevel: body.experienceLevel,
						expectedSalary: body.expectedSalary,
						role: body.role,
						status: body.status,
						url: body.url
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
				<NavLink to="/" activeStyle={{ color: 'white' }}>
					<h2 id="homeButton">Home</h2>
				</NavLink>
				<br />
				{this.state.toggleSignIn ? (
					<div>
						<h1 style={{ margin: '10px', display: 'block', color: 'darkorange', fontSize: '25px' }}>
							Construction Worker Sign In
						</h1>
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
						<button onClick={this.clicked.bind(this)} className="Button">
							Sign In
						</button>
					</div>
				) : (
					<WorkerMainPage
						fullName={this.state.fullName}
						phoneNumber={this.state.phoneNumber}
						experienceLevel={this.state.experienceLevel}
						expectedSalary={this.state.expectedSalary}
						role={this.state.role}
						status={this.state.status}
						url={this.state.url}
					/>
				)}
			</div>
		);
	}
}
export default WorkerSignIn;
