import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import EngineerSignIn from './EngineerSignIn.jsx';
import { storage } from '../firebase';
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
			toggleSignIn: false,
			image: null,
			url: ''
		};
		this.handleChange = this.handleChange.bind(this);
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
			(snapshot) => {
				const progress = Math.rond(snapshot.bytesTransferred / snapshot.totalBytes * 100);
				this.setState({ progress });
			},
			(error) => {},
			() => {
				storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
					console.log(url);
					this.setState({ url });
				});
			}
		);
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
			(snapshot) => {
				const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
			},
			(error) => {},
			() => {
				storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
					this.setState({ url });
					console.log(url);
				});
			}
		);
	}
	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	engineerSignUp() {
		var { fullname, username, password, sitelocation, phonenumber, url } = this.state;
		var engineer = { fullname, username, password, sitelocation, phonenumber, url };
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
				if (response.success === 'Sign up as engineer successful') {
					that.setState({
						username: '',
						password: '',
						toggleSignIn: true,
						toggleSignUp: false
					});
					console.log(response.success);
				} else {
					console.log(response.error);
				}
			});
	}
	render() {
		return (
			<div>
				{this.state.toggleSignUp ? (
					<div>
						<NavLink to="/" activeStyle={{ color: 'white' }}>
							<h2 id="homeButton">Home</h2>
						</NavLink>
						<h1 style={{ margin: '10px', display: 'block', color: 'darkorange', fontSize: '25px' }}>
							Sign Up for Engineers
						</h1>
						<input type="file" name="image" onChange={this.handleChange} />
						<button onClick={this.handleUpload.bind(this)} className="Button">
							Upload
						</button>
						<br />
						<img
							src={
								this.state.url ||
								'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
							}
							alt="uploaded image"
							height="150"
							width="200"
						/>
						<br />
						<input
							type="text"
							name="fullname"
							placeholder="fullName"
							onChange={this.changed.bind(this)}
						/>{' '}
						<br />
						<input type="text" name="username" placeholder="userName" onChange={this.changed.bind(this)} />
						<br />
						<input
							type="password"
							name="password"
							placeholder="password"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<input
							type="text"
							name="sitelocation"
							placeholder="Site Location"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<input
							type="number"
							name="phonenumber"
							placeholder="Phone Number"
							onChange={this.changed.bind(this)}
						/>
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
