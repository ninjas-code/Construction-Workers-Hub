import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import  profiles  from './Profiles.jsx'

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
				<h2  style={{  margin: '10px', display:'block', color: 'darkOrange', fontSize: '25px' }}>	
					<strong>{ 'WELCOME to  '+ this.props.fullName +"'s   PROFILE"}</strong><br/>
				</h2>
				<img src = {this.props.url || 'https://via.placeholder.com/150'} alt = "uploaded image" height = "150" width = "200" />
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'Name:  '} {this.props.fullName}</h2> 
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'User Name:  '} {this.props.userName}</h2>
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'Phone Number:  '} {this.props.phoneNumber}</h2> 
				  <h2 style= {{color: 'white', fontSize: '18px'}}> {'Location:  '} {this.props.siteLocation}</h2>

				<h2  style={{  margin: '10px', display:'block', color: 'darkOrange', fontSize: '25px' }}>	
					<strong>Construction Workers:</strong><br/>
				</h2>
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
