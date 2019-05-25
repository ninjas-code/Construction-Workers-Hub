import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

import EngineerSignUp from './components/EngineerSignUp.jsx';
import EngineerSignIn from './components/EngineerSignIn.jsx';
import WorkerSignUp from './components/WorkerSignUp.jsx';
import WorkerSignIn from './components/WorkerSignIn.jsx';
import EngineerMainPage from './components/EngineerMainPage.jsx';
import Smiths from './components/Smiths.jsx';
import Carpenters from './components/Carpenters.jsx';
import StoneBuilders from './components/StoneBuilders.jsx';
import Painters from './components/Painters.jsx';
import Profiles from './components/Profiles.jsx';
import WorkerMainPage from './components/WorkerMainPage.jsx';
import LearnMore from './components/learnMore.jsx';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route
						exact
						path="/"
						render={() => (
							<div>
								<NavLink to="/" activeStyle={{ color: 'white' }}>
									<h2 id="homeButton">Home</h2>
								</NavLink>
							</div>
						)}
					/>
					<NavLink to="/learnMore" activeStyle={{ color: 'white' }}>
						<h3 id="LearnMore">Learn More</h3>
					</NavLink>

					<Route
						exact
						path="/"
						render={() => (
							<div>
								<NavLink to="/signupEngineer" activeStyle={{ color: 'red' }}>
									<button className="engineerSignUpButton" value="sign up as an engineer">
										<h2 className="signUp">Engineer Sign Up</h2>
									</button>
								</NavLink>
								<NavLink to="/signupWorker" activeStyle={{ color: 'blue' }}>
									<button className="workerSignUpButton" value="sign up as a construction Worker">
										<h2 className="signUp">Construction Worker Sign Up</h2>
									</button>
								</NavLink>
							</div>
						)}
					/>
					<Route path="/signupEngineer" component={EngineerSignUp} />
					<Route path="/signinEngineer" component={EngineerSignIn} />
					<Route path="/signupWorker" component={WorkerSignUp} />
					<Route path="/signinWorker" component={WorkerSignIn} />
					<Route path="/engineerPage" component={EngineerMainPage} />
					<Route path="/WorkerMainPage" component={WorkerMainPage} />
					<Route path="/smith" component={Smiths} />
					<Route path="/carpenter" component={Carpenters} />
					<Route path="/stoneBuilder" component={StoneBuilders} />
					<Route path="/painter" component={Painters} />
					<Route path="/engineerworker/:id" component={Profiles} />
					<Route path="/learnMore" component={LearnMore} />
				</div>
			</BrowserRouter>
		);
	}
}
export default App;

ReactDOM.render(<App />, document.getElementById('construction'));
