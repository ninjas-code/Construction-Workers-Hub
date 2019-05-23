import React from 'react';
import { Link } from 'react-router-dom';
import WorkerSignIn from './EngineerSignIn.jsx';
import {storage} from "../firebase";
import Noty from 'noty';

import '../../node_modules/noty/lib/noty';
// import '../../node_modules/noty/lib/themes/bootstrap-v4.css';

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
			image : null,
			url : '',
			alert_success:'',
			alert_ServerError:'',
			alert_AlreadyTaken:''
		};
		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(e){
		if(e.target.files[0]){
			const image =  e.target.files[0]
			this.setState(()=>({image})
				)
		}
	}

	handleUpload(){
	const {image} = this.state;
	const uploadTask =	storage.ref(`images/${image.name}`).put(image);
	uploadTask.on(`state_changed` , ()=>{

	} , (error)=>{

	} , ()=>{
		storage.ref(`images`).child(image.name).getDownloadURL().then(url=>{
			
		});
	})
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
				// console.log(response);
				if (response.success === 'Sign up as worker successful') {
					that.setState({
						username: '',
						password: '',
						toggleSignUp: false,
						toggleSignIn: true,
						alert_success:response.success
					});
					return;
				} else {
					if (response.error === 'This username is already taken'){
						this.setState({
							alert_ServerError:response.error
						})
					} else {
						this.setState({
							alert_ServerError:response.error
						})
					}
					
					console.log(this.state.alert_ServerError);
					return;
				}
			});
	}

	show(){
		let that = this;
		let mess = 'hello';
		new Noty({
			text:mess,
		}).show();
	}

	render() {
		let role = [ 'Choose The Role', 'Painter', 'Carpenter', 'Stone Builder', 'Smith' ];
		const chooseRoles = role.map((option) => {
			return <option key={option}>{option}</option>;
		});

		let experienceLevel = [ 'Choose Experience Level', 'Professional', 'Intermediate', 'Beginner' ];
		const chooseExperienceLevel = experienceLevel.map((option) => {
			return <option key={option}>{option}</option>;
		});

		let status = [ 'Choose Status', 'Available', 'not Available' ];
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
						<h1 style={{color :'orange'}}>Sign Up for construction Workers</h1>
						<br />
						<br />
						<input type="file" name = "image" onChange = {this.handleChange}/>
						<button onClick={this.handleUpload.bind(this)}></button>
						<br />
						<br />
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
							type="tel"
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
						/>
						<p style={{color :'orange', display:'inline', marginLeft:'10px'}}>JD</p>
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
						{/* this.clicked.bind(this) */}
						<button id="signUpWorker" onClick={(e)=> {this.clicked(e) , this.show(e)}}
						
						>
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
