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
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<h2>Construction Workers:</h2>
				<NavLink to="/smith" activeStyle={{ color: 'purple' }}>
					<button value="Smiths" onClick={this.smithClick.bind(this)}>
						Smiths
					</button>
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
