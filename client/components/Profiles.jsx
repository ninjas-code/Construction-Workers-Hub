import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
class Profiles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userProfile: [],
			number: '',
			msg: ''
		};
	}
	componentWillMount() {
		let that = this;
		const { match } = this.props;
		//console.log()
		fetch(`/engineerworker/${match.params.id}`)
			.then((response) => response.json())
			.then((data) => that.setState({ userProfile: data }))
			.then(console.log(that.state.userProfile))
			.catch((err) => {
				console.log(err);
			});
	}
	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	sendMessage() {
		var that = this;
		var { number, msg } = that.state;
		var message = { number, msg };
		fetch('/sentMessage', {
			method: 'POST',
			body: JSON.stringify(message),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(message);
	}
	render() {
		return (
			<div>
				<NavLink to="/" activeStyle={{ color: 'white' }}>
					<h2 id="homeButton">Home</h2>
				</NavLink>
				{this.state.userProfile.map((user, i) => (
					<ul key={i}>
						<h2 style={{ margin: '10px', display: 'block', color: 'orange', fontSize: '25px' }}>
							<strong>{'WELCOME to  ' + user.fullName + "'s   PROFILE"}</strong>
							<br />
						</h2>
						<br />
						<br />
						<img
							src={
								user.url ||
								'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
							}
							alt="uploaded image"
							height="150"
							width="200"
						/>
						<br />
						<br />
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'Name:  '} {user.fullName}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'Experience Level:  '} {user.experienceLevel}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'Expected Salary:  '} {user.expectedSalary}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'Phone Number:  '} {user.phoneNumber}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'Status:  '} {user.status}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'Role:  '} {user.role}
						</h2>
						{
							<button
								id="book"
								onClick={() => {
									if (user.status === 'not Available') {
										alert(user.fullName + ' is not availbale at the moment');
										return;
									} else {
										alert(
											'Booked ' +
												user.fullName +
												' successfully send ' +
												user.fullName +
												' a message bellow '
										);
										let that = this;
										const { match } = this.props;
										//console.log()
										fetch(`/engineerworker/${match.params.id}`, {
											method: 'put'
										}).then(function(response) {
											if (response.status == 200) {
												console.log('hi');
											} else {
												response.then((error) => {
													console.log(error);
												});
											}
										});
										const token = localStorage.getItem('token');
										console.log(token);
										fetch(`/engineerworker/${match.params.id}`, {
											method: 'post',
											headers: { 'x-access-token': token }
										}).then(function(response) {
											if (response.status == 201) {
												console.log('added');
											} else {
												console.log('err');
											}
										});
									}
								}}
								className="Button"
							>
								Book Now
							</button>
						}
					</ul>
				))}
				<h2 style={{ margin: '10px', display: 'block', color: 'orange', fontSize: '25px' }}>
					Send SMS Message:
				</h2>
				<input
					type="tel"
					name="number"
					id="number"
					placeholder="Enter Phone Number..."
					onChange={this.changed.bind(this)}
				/>
				<br />
				<br />
				<input
					type="text"
					name="msg"
					id="msg"
					placeholder="Enter Text Message..."
					onChange={this.changed.bind(this)}
				/>
				<br />
				<br />
				<button onClick={this.sendMessage.bind(this)} className="Button">
					Send Message
				</button>
			</div>
		);
	}
}
export default Profiles;
