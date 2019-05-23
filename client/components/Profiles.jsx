import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
const response = document.querySelector('.response');

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
			//.then(console.log(that.state.userProfile))
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
		var messages = { number, msg };

		// button.addEventListener('click', send, false);
		// const socket = io();
		// socket.on('smsStatus', function(data) {
		// 	response.innerHTML = '<h5>Text message sent to' + data.number + '</h5>';
		// });
		fetch('/sentMessage', {
			method: 'POST',
			body: JSON.stringify(messages),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		// 	.then(function(res) {
		// 		console.log(res);
		// 	})
		// 	.catch(function(err) {
		// 		console.log(err);
		// 	});
		// console.log(message);
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
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'Name:  '} {user.fullName}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'experienceLevel:  '} {user.experienceLevel}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'expectedSalary:  '} {user.expectedSalary}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'phoneNumber:  '} {user.phoneNumber}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'status:  '} {user.status}
						</h2>
						<h2 style={{ color: 'white', fontSize: '18px' }}>
							{' '}
							{'role:  '} {user.role}
						</h2>
						{
							<button
								id="book"
								onClick={() => {
									if (user.status === 'not Available') {
										alert(user.fullName + ' is not availbale at the moment');
										return;
									} else {
										const workerNAME = user.userName;
										fetch('/orders', {
											method: 'POST',
											body: JSON.stringify({
												workers: workerNAME,
												endDate: '2019-05-25 21:13:03'
											}),
											headers: { 'Content-Type': 'application/json' }
										})
											.then((response) => {
												return response.json();
											})
											.then((data) => console.log(data));
									}
								}}
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
				<button onClick={this.sendMessage.bind(this)}>Send Message</button>
			</div>
		);
	}
}

export default Profiles;
