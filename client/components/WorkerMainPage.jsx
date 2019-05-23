import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class WorkerMainPage extends React.Component {
	render() {
		console.log(this.props);
		return (
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
			</div>
		);
	}
}

export default WorkerMainPage;
