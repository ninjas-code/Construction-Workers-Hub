import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Profiles } from './Profiles.jsx';

class Smiths extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allSmiths: []
		};
	}
	componentDidMount() {
		let that = this;
		fetch('/smith')
			.then((response) => response.json())
			.then((data) => that.setState({ allSmiths: data }))
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
<<<<<<< HEAD
				<NavLink to="/" activeStyle={{ color: 'white' }}>
					<h2 id="homeButton">Home</h2>
				</NavLink>
				{this.state.allSmiths.length === 0 ? (
					<h1> there is no Smiths provided yet</h1>
				) : (
					<table>
						<tbody>
							{this.state.allSmiths.map((user, i) => (
								<tr
									key={user.id}
									style={{
										margin: '10px',
										display: 'block',
										color: 'white',
										fontSize: '20px',
										borderStyle: 'solid',
										padding: '15px'
									}}
								>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>fullName:</strong>
									</td>
									<td>{user.fullName}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>experienceLevel:</strong>
									</td>
									<td>{user.experienceLevel}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>expectedSalary:</strong>
									</td>
									<td>{user.expectedSalary}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>phoneNumber:</strong>
									</td>
									<td>{user.phoneNumber}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>status:</strong>
									</td>
									<td>{user.status}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>role:</strong>
									</td>
									<td>{user.role}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<NavLink to={'/engineerworker/' + user.id} activeStyle={{ color: 'purple' }}>
											<button value="GoToProfile">Go To Profile</button>
										</NavLink>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
=======
			{ this.state.allSmiths.length === 0 ? <h1> there is no Smiths provided yet</h1> :
		 <table> 
			 
		  <tbody>
			{this.state.allSmiths.map( (user, i) => 
			<tr key = {user.id } style={{ margin: '10px', display:'block', 
			color: 'white',fontSize: '20px', borderStyle: 'solid', padding: '15px'}}>  
			<td style= {{color: 'orange', fontSize: '18px'}}><strong>fullName:</strong></td><td>{user.fullName}</td>
			<td style= {{color: 'orange', fontSize: '18px'}}><strong>experienceLevel:</strong></td><td>{user.experienceLevel}</td>
			<td style= {{color: 'orange', fontSize: '18px'}}><strong>expectedSalary:</strong></td><td>{user.expectedSalary}</td>
			<td style= {{color: 'orange', fontSize: '18px'}}><strong>phoneNumber:</strong></td><td>{user.phoneNumber}</td>
			<td style= {{color: 'orange', fontSize: '18px'}}><strong>status:</strong></td><td>{user.status}</td>
			<td style= {{color: 'orange', fontSize: '18px'}}><strong>role:</strong></td><td>{user.role}</td>
			<td style= {{color: 'orange', fontSize: '18px'}}><NavLink to={"/engineerworker/"+user.id} activeStyle={{ color: 'purple' }}>
			<button value="GoToProfile"  >Go To Profile</button>
		    </NavLink></td>
		   </tr>
		  )}
		 </tbody>
		  
		</table>
			}
	 </div>		
>>>>>>> 3720f749e0e7ecc4160828ab20340db215e3e7e1
		);
	}
}

export default Smiths;
