import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Profiles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				userProfile: [],
				show:false
				
			};
		}
		clicked(){
			this.setState({
				show : !this.state.show
			})
		}
	componentDidMount(){
		 let that = this;
		
		const  { match }  = this.props;
	   //console.log()
		fetch(`/engineerworker/${match.params.id}`)
		  .then( (response) => response.json())	
			.then( data =>  that.setState({userProfile: data }))
			// .then(console.log(that.state.userProfile))
			.catch(err => { console.log(err) })
		
	}
	 	render() {
			//const  { params }  = this.props;
			// var x= this.state.userProfile;
			// var name = x[0];
			// console.log(name);
			// console.log(x[0])
			
			return (
		    <div>
				<h1>THE PROFILE OF {this.state.userProfile.fullName}YOU CHOOSED</h1>
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
		<button onClick={this.clicked.bind(this)}>Book Worker</button><br/><br/>
				{this.state.show===true ? <input type='text' placeholder='putdate'/> : null }
	 </div>	

		);
	}
	
}

export default Profiles;
