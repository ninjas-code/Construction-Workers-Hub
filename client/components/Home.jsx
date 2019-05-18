import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EngineerSignUp from './EngineerSignUp.jsx';

class Home extends React.Component {
	engineersClick() {}
	render() {
		return (
			<div>
				<p>logo</p>
				<br />
				<br />
				{/* <button onClick={this.engineersClick}>Sign up as an Engineer</button> <br />
				<br />
				<button>Sign up as a construction worker</button> */}
			</div>
		);
	}
}

export default Home;
