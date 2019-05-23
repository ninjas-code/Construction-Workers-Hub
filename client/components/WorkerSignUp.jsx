import React from 'react';
import { NavLink } from 'react-router-dom';
import WorkerSignIn from './WorkerSignIn.jsx';
import { storage } from '../firebase';

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
			toggleSignIn: false,
			status: '',
			image: null,
			url: ''
		};
	}

	handleChange(e) {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			this.setState(() => ({ image }));
		}
	}

	handleUpload() {
		const { image } = this.state;
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			`state_changed`,
			() => {},
			(error) => {},
			() => {
				storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {});
			}
		);
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
						toggleSignIn: true
					});
					return;
				} else {
					console.log(response.error);
					return;
				}
			});
	}

	render() {
		let role = [ 'role', 'Painter', 'Carpenter', 'Stone Builder', 'Smith' ];
		const chooseRoles = role.map((option) => {
			return <option key={option}>{option}</option>;
		});

		let experienceLevel = [ 'experiencelevel', 'Professional', 'Intermediate', 'Beginner' ];
		const chooseExperienceLevel = experienceLevel.map((option) => {
			return <option key={option}>{option}</option>;
		});

		let status = [ 'status', 'Available', 'not Available' ];
		const chooseStatus = status.map((option) => {
			return <option key={option}>{option}</option>;
		});

		return (
			<div>
				<NavLink to="/" activeStyle={{ color: 'white' }}>
					<h2 id="homeButton">Home</h2>
				</NavLink>
				{this.state.toggleSignUp ? (
					<div>
						<h1 style={{ margin: '10px', display: 'block', color: 'darkorange', fontSize: '25px' }}>
							Sign Up for construction Workers
						</h1>
						<br />
						<br />
						<input type="file" name="image" onChange={this.handleChange} />
						<button onClick={this.handleUpload.bind(this)} />
						<br />
						<input type="text" name="fullname" placeholder="fullName" onChange={this.onChange.bind(this)} />
						<br />
						<input type="text" name="username" placeholder="userName" onChange={this.onChange.bind(this)} />
						<br />
						<input
							type="password"
							name="password"
							placeholder="password"
							onChange={this.onChange.bind(this)}
						/>
						<br />
						<input
							type="number"
							name="phonenumber"
							placeholder="079-123-4567"
							onChange={this.onChange.bind(this)}
						/>
						<br />
						<input
							type="number"
							name="expectedsalary"
							placeholder="expected salary"
							onChange={this.onChange.bind(this)}
						/>{' '}
						JD/hr.
						<br />
						<select name="experiencelevel" onChange={this.onChange.bind(this)}>
							{chooseExperienceLevel}
						</select>
						<br />
						<select name="role" onChange={this.onChange.bind(this)}>
							{chooseRoles}
						</select>
						<br />
						<select name="status" onChange={this.onChange.bind(this)}>
							{chooseStatus}
						</select>
						<br />
						<button id="signUpWorker" className="Button" onClick={this.clicked.bind(this)}>
							Sign Up
						</button>
						<NavLink to="/signinWorker">
							<button value="sign In as a construction Worker" className="Button">
								Aready Signed up? Sign In Here
							</button>
						</NavLink>
					</div>
				) : (
					<WorkerSignIn />
				)}
			</div>
		);
	}
}

export default WorkerSignUp;
