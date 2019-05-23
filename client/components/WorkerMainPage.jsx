import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class WorkerMainPage extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h2 style={{ margin: '10px', display: 'block', color: 'darkOrange' }}>
					<strong>{'WELCOME ' + this.props.fullName + ' TO YOUR PROFILE'}</strong>
				</h2>
				<br />
				<img
					src={this.props.url || 'https://via.placeholder.com/150'}
					alt="uploaded image"
					height="150"
					width="200"
				/>
				<h2 style={{ color: 'white' }}>
					{' '}
					{'Name:  '} {this.props.fullName}
				</h2>
				<h2 style={{ color: 'white' }}>
					{' '}
					{'Phone Number:  '} {this.props.phoneNumber}
				</h2>
				<h2 style={{ color: 'white' }}>
					{' '}
					{'ExperienceLevel:  '} {this.props.experienceLevel}
				</h2>
				<h2 style={{ color: 'white' }}>
					{' '}
					{'expectedSalary:  '} {this.props.expectedSalary}
				</h2>
			</div>
		);
	}
}

export default WorkerMainPage;
