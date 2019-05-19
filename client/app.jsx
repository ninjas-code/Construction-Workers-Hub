import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home.jsx';
import EngineerSignUp from './components/EngineerSignUp.jsx';
import EngineerSignIn from './components/EngineerSignIn.jsx';
import workerSignUp from './components/WorkerSignUp.jsx';
import WorkerSignIn from './components/WorkerSignIn.jsx';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div>
					<Route
						exact
						path="/"
						render={() => (
							<div>
								<Link to="/signupEngineer">
									<button className="engineerSignUpButton" value="sign up as an engineer" />
								</Link>

								<Link to="/workerSignUp">
									<button className="workerSignUpButton" value="sign up as a construction Worker" />
								</Link>
							</div>
						)}
					/>
					<Route path="/home" component={Home} />
					<Route path="/signupEngineer" component={EngineerSignUp} />
					<Route path="/signinEngineer" component={EngineerSignIn} />
					<Route path="/signinWorker" component={WorkerSignIn} />
					<Route path="/engineerSignUp" component={EngineerSignUp} />
					<Route path="/workerSignUp" component={workerSignUp} />
				</div>
			</BrowserRouter>
		);
	}
}
export default App;

ReactDOM.render(<App />, document.getElementById('construction'));
