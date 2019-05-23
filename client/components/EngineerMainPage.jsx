import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class EngineerMainPage extends React.Component {
	smithClick() {
		fetch('/smith')
			.then(function(data) {
				console.log(data);
				return data.json();
			})
			.then(function(data) {
				console.log({ 'the data': data.json() });
			});
	}

	
	render() {
		return (
			<div>
				<h1>Welcome to your Profile</h1>
				<br />
				<br />
				<img src = {this.props.url || 'https://via.placeholder.com/150'} alt = "uploaded image" height = "150" width = "200" />
				<br />
				<br />
				<label>Full Name : </label><p>{this.props.fullName}</p>
				<label>Phone Number : </label><p>this.props.phoneNumber}</p>
				<label>Site Location : </label><p>{this.props.siteLocation}</p>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<h2>Construction Workers:</h2>
				<NavLink to="/smith" activeStyle={{ color: 'purple' }}>
					<button value="Smiths" >Smiths</button>
				</NavLink>
				<NavLink to="/carpenter" activeStyle={{ color: 'purple' }}>
					<button value="Carpenters">Carpenters</button>
				</NavLink>
				<NavLink to="/stoneBuilder" activeStyle={{ color: 'purple' }}>
					<button value="Stone Builders">Stone Builders</button>
				</NavLink>
				<NavLink to="/painter" activeStyle={{ color: 'purple' }}>
					<button value="Painters">Painters</button>
				</NavLink>
			</div>
		);
	}
}

export default EngineerMainPage;
