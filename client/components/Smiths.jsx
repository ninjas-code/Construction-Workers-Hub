import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import  { smithsProfile }  from './SmithsProfile.jsx';

class Smiths extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  allSmiths: []
		};
	 }
	componentDidMount(){
	let that = this;
  fetch('/smith')
	.then( (response) => response.json())
	.then( data => that.setState({ allSmiths: data }) )
    .catch(err => { console.log(err) })

	}
	

	render() {
		return (
			<div>
			<h1>Hi We are the Smiths</h1>
			<ul>
			{this.state.allSmiths.map( (user, i) => 
            <li key = {user.id } style={{  margin: '10px', display:'block' }}>  {user.fullName} ,  {user.experienceLevel}, {user.expectedSalary} ,
			 {user.phoneNumber}, {user.status} , {user.role}
			<NavLink to={"/engineerworker/"+user.userName} activeStyle={{ color: 'purple' }}>
			<button value="GoToProfile"  >Go To Profile</button>
		    </NavLink>
		 </li>
		  )}
		  </ul>
			</div>
		);
	}
}

export default Smiths;
