import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class SmithsProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			  userProfile: []
			};
		}
	componentDidMount(){
		let that = this;
	    //const { match: { params } } = this.props;
		fetch('/engineerworker/')
		  .then( (response) => response.json())
		  .then( data => console.log(data))
		  .catch(err => { console.log(err) })
	}
		render() {
			return (
				<div>
			<h1>here is the user you choosed</h1>
			
			</div>
		);
	}
	
}



 //module.exports.choosed =  choosed;
export default SmithsProfile;
