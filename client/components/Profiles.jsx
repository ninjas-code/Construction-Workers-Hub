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
			.then((data) => that.setState({userProfile: data }
				))
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
				
				{this.state.userProfile.map((user, i) => (
					<ul key={i}>
						<h2 style={{ margin: '10px', display: 'block', color: 'orange', fontSize: '25px' }}>
							<strong>{'WELCOME to  ' + user.fullName + "'s   PROFILE"}</strong>
							<br />
						</h2>
						  <br/>
							<br/>
							<img src = {user.url || 'https://via.placeholder.com/150'} alt = "uploaded image" height = "200" width = "300" />
							<br/>
							<br/>
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
							//in this button i tried to access engineer username 
							//to save in order table with worker username but i can't
							//mybe we have to use taken ?
						 <button id="book" onClick={ () =>{
						 if(user.status === "not Available"){
							alert(user.fullName + 'is not availbale at the moment');
							return;
						 }else{
							 const workerNAME = user.user.fullName ;
							 fetch('/orders', {
								method: 'POST',
								body: JSON.stringify({ workers : workerNAME , endDate: '2019-05-25 21:13:03'/*example date*/ }),
								headers: {'Content-Type': 'application/json'}
							 })
							 .then((response) => {
									return response.json();
								})
							 .then( (data)=> console.log(data) ) 		
						 }
					 } } >Book Now</button>}
					 { <label style={{ color: 'white' }}>{'  '}End date:</label>}
					 {<input type="date" id="date" name="endDate"></input>}
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
