import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class WorkerMainPage extends React.Component {
	render() {
		console.log(this.props);
		return (
<<<<<<< HEAD
			<div>
				<label>fullName : </label>
				<text>{this.props.fullName}</text>
				<label>phoneNumber : </label>
				<text>{this.props.phoneNumber}</text>
				<label>experience Level : </label>
				<text>{this.props.experienceLevel}</text>
				<label>expected Salary : </label>
				<text>{this.props.expectedSalary}</text>
				<label>role : </label>
				<text>{this.props.role}</text>
				<label>status : </label>
				<text>{this.props.status}</text>
=======
			<div >
				<h2  style={{  margin: '10px', display:'block', color: 'darkOrange', fontSize: '25px' }}>	
					<strong>{ 'WELCOME to  '+ this.props.fullName +"'s   PROFILE"}</strong><br/>
				</h2>
				<img src = {this.props.url || 'https://via.placeholder.com/150'} alt = "uploaded image" height = "150" width = "200" />
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'Name:  '} {this.props.fullName}</h2> 
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'Phone Number:  '} {this.props.phoneNumber}</h2> 
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'ExperienceLevel:  '} {this.props.experienceLevel}</h2>
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'expectedSalary:  '} {this.props.expectedSalary}</h2>

>>>>>>> 3720f749e0e7ecc4160828ab20340db215e3e7e1
			</div>

		);
	}
}

export default WorkerMainPage;
