import React from 'react';
<<<<<<< HEAD
import { Link, NavLink } from 'react-router-dom';
=======
import { Link, NavLink, Redirect } from 'react-router-dom';
import  profiles  from './Profiles.jsx'
>>>>>>> 3720f749e0e7ecc4160828ab20340db215e3e7e1

class EngineerMainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			engProfile: []
		};
	}
<<<<<<< HEAD

=======
	
	
>>>>>>> 3720f749e0e7ecc4160828ab20340db215e3e7e1
	render() {
		
		return (
			<div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 3720f749e0e7ecc4160828ab20340db215e3e7e1
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
