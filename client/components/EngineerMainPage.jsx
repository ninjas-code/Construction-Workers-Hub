import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import profiles from './Profiles.jsx';

class EngineerMainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			engProfile: []
		};
	}

	render() {
		return (
			<div>
				<h2 style={{ margin: '10px', display: 'block', color: 'darkOrange' }}>
					<strong>{'WELCOME ' + this.props.fullName + ' TO YOUR PROFILE'}</strong>
					<br />
				</h2>
				<img
					src={
						this.props.url ||
						'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
					}
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
					{'User Name:  '} {this.props.userName}
				</h2>
				<h2 style={{ color: 'white' }}>
					{' '}
					{'Phone Number:  '} {this.props.phoneNumber}
				</h2>
				<h2 style={{ color: 'white' }}>
					{' '}
					{'Location:  '} {this.props.siteLocation}
				</h2>

				<h2 style={{ margin: '10px', display: 'block', color: 'darkOrange', fontSize: '25px' }}>
					<strong>Construction Workers:</strong>
					<br />
				</h2>
				<NavLink to="/smith" activeStyle={{ color: 'purple' }}>
					<button value="Smiths" className="Button">
						Smiths
					</button>
				</NavLink>
				<NavLink to="/carpenter" activeStyle={{ color: 'purple' }}>
					<button value="Carpenters" className="Button">
						Carpenters
					</button>
				</NavLink>
				<NavLink to="/stoneBuilder" activeStyle={{ color: 'purple' }}>
					<button value="Stone Builders" className="Button">
						Stone Builders
					</button>
				</NavLink>
				<NavLink to="/painter" activeStyle={{ color: 'purple' }}>
					<button value="Painters" className="Button">
						Painters
					</button>
				</NavLink>
			</div>
		);
	}
}

export default EngineerMainPage;
