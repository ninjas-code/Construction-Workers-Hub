import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Profiles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userProfile: []
		};
	}
	componentWillMount() {
		let that = this;

		const { match } = this.props;
		//console.log()
		fetch(`/engineerworker/${match.params.id}`)
			.then((response) => response.json())
			.then((data) => that.setState({ userProfile: data }))
			//.then(console.log(that.state.userProfile))
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		//const  { params }  = this.props;

		return (
			<div>
				{this.state.userProfile.map((user, i) => (
					<ul key={i}>
						<h1 style={{ margin: '10px', display: 'block' }}>
							<strong>{'WELCOME to  ' + user.fullName + "'s   PROFILE"}</strong>
							<br />
						</h1>
						<h2>
							{' '}
							{'Name:  '} {user.fullName}
						</h2>
						<h2>
							{' '}
							{'experienceLevel:  '} {user.experienceLevel}
						</h2>
						<h2>
							{' '}
							{'expectedSalary:  '} {user.expectedSalary}
						</h2>
						<h2>
							{' '}
							{'phoneNumber:  '} {user.phoneNumber}
						</h2>
						<h2>
							{' '}
							{'status:  '} {user.status}
						</h2>
						<h2>
							{' '}
							{'role:  '} {user.role}
						</h2>
					</ul>
				))}
			</div>
		);
	}
}

export default Profiles;

// { console.log(this.state.x) }
// <h1>{'WELCOME '+this.state.x +'' }</h1>
// <table>
//  <tbody>
// {this.state.userProfile.map( (user, i) =>
// 		<tr key = {i } style={{  margin: '10px', display:'block' }}>
// <td><strong> NAME: </strong></td><td>{user.fullName}</td>
// <td><strong>EXPERIENCE LEVEL:</strong></td><td>{user.experienceLevel}</td>
// <td><strong>SALARY:</strong></td><td>{user.expectedSalary}</td>
// <td><strong>PHONE NUMBER:</strong></td><td>{user.phoneNumber}</td>
// <td><strong>STATUS:</strong></td><td>{user.status}</td>
// <td><strong>ROLE:</strong></td><td>{user.role}</td>
// { this.state.x = user.fullName}
// </tr>
// )}
// </tbody>

// </table>
