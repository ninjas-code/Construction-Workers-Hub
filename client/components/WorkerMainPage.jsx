import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class WorkerMainPage extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<img src = {this.props.url || 'https://via.placeholder.com/150'} alt = "uploaded image" height = "150" width = "200" />
				<br/>
				<br/>
				<label>fullName : </label><p>{this.props.fullName}</p>
				<label>phoneNumber : </label><p>{this.props.phoneNumber}</p>
				<label>experience Level : </label><p>{this.props.experienceLevel}</p>
				<label>expected Salary : </label><p>{this.props.expectedSalary}</p>
				<label>role : </label><p>{this.props.role}</p>
				<label>status : </label><p>{this.props.status}</p>
			</div>
		);
	}
}

export default WorkerMainPage;
