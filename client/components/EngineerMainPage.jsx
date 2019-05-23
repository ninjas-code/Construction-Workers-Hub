import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
				<h1 style={{ margin: '10px', display: 'block', color: 'orange', fontSize: '25px' }}>
					Welcome to your profile
				</h1>
				<br />
				<br />
				<br />
				<br />
				<label>Full Name : </label>
				<text>{this.props.fullName}</text>
				<label>Phone Number : </label>
				<text>{this.props.phoneNumber}</text>
				<label>Site Location : </label>
				<text>{this.props.siteLocation}</text>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<h2>Construction Workers:</h2>
				<NavLink to="/smith" activeStyle={{ color: 'purple' }}>
					<button value="Smiths">Smiths</button>
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
