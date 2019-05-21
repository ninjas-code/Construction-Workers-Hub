import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Profiles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				userProfile: []
				
			};
		}
	componentDidMount(){
		 let that = this;
		
		const  { match }  = this.props;
	   //console.log()
		fetch(`/engineerworker/${match.params.id}`)
		  .then( (response) => response.json())	
			.then( data =>  that.setState({userProfile: data }))
			//.then(console.log(that.state.userProfile))
			.catch(err => { console.log(err) })
		
	}
	 	render() {
			//const  { params }  = this.props;
			
			return (
		    <div>
				<h1>THE PROFILE OF WORKER YOU CHOOSED</h1>
		    <table> 
		     <tbody>
			{this.state.userProfile.map( (user, i) => 
            <tr key = {i } style={{  margin: '10px', display:'block' }}>  
			<td><strong> NAME: </strong></td><td>{user.fullName}</td>
			<td><strong>EXPERIENCE LEVEL:</strong></td><td>{user.experienceLevel}</td>
			<td><strong>SALARY:</strong></td><td>{user.expectedSalary}</td>
			<td><strong>PHONE NUMBER:</strong></td><td>{user.phoneNumber}</td>
			<td><strong>STATUS:</strong></td><td>{user.status}</td>
			<td><strong>ROLE:</strong></td><td>{user.role}</td>
		   </tr>
		  )}
		 </tbody>
		  
		</table>
	 </div>	

		);
	}
	
}

export default Profiles;
