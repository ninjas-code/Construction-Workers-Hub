import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import  { Profiles }  from './Profiles.jsx';

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
			{ this.state.allSmiths.length === 0 ? <h1> there is no Smiths provided yet</h1> :
		 <table> 
		  <tbody>
			{this.state.allSmiths.map( (user, i) => 
      <tr key = {user.id } style={{  margin: '10px', display:'block' }}>  
			<td><strong>fullName:</strong></td><td>{user.fullName}</td>
			<td><strong>experienceLevel:</strong></td><td>{user.experienceLevel}</td>
			<td><strong>expectedSalary:</strong></td><td>{user.expectedSalary}</td>
			<td><strong>phoneNumber:</strong></td><td>{user.phoneNumber}</td>
			<td><strong>status:</strong></td><td>{user.status}</td>
			<td><strong>role:</strong></td><td>{user.role}</td>
			<td><NavLink to={"/engineerworker/"+user.id} activeStyle={{ color: 'purple' }}>
			<button value="GoToProfile"  >Go To Profile</button>
		    </NavLink></td>
		   </tr>
		  )}
		 </tbody>
		  
		</table>
			}
	 </div>		
		);
	}
}

export default Smiths;
