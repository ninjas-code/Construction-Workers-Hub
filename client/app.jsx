import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

import EngineerSignUp from './components/EngineerSignUp.jsx';
import EngineerSignIn from './components/EngineerSignIn.jsx';
import workerSignUp from './components/WorkerSignUp.jsx';
import WorkerSignIn from './components/WorkerSignIn.jsx';
import EngineerMainPage from './components/EngineerMainPage.jsx';
import Smiths from './components/Smiths.jsx';
import Carpenters from './components/Carpenters.jsx';
import StoneBuilders from './components/StoneBuilders.jsx';
import Painters from './components/Painters.jsx';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<Route
						exact
						path="/"
						render={() => (
							<div>
								<NavLink to="/signupEngineer" activeStyle={{ color: 'red' }}>
									<button className="engineerSignUpButton" value="sign up as an engineer" />
								</NavLink>

								<NavLink to="/workerSignUp" activeStyle={{ color: 'blue' }}>
									<button className="workerSignUpButton" value="sign up as a construction Worker" />
								</NavLink>
							</div>
						)}
					/>
					<Route path="/signupEngineer" component={EngineerSignUp} />
					<Route path="/signinEngineer" component={EngineerSignIn} />
					<Route path="/signinWorker" component={WorkerSignIn} />
					<Route path="/engineerSignUp" component={EngineerSignUp} />
					<Route path="/workerSignUp" component={workerSignUp} />
					<Route path="/engineerPage" component={EngineerMainPage} />
					<Route path="/smith" component={Smiths} />
					<Route path="/carpenter" component={Carpenters} />
					<Route path="/stoneBuilder" component={StoneBuilders} />
					<Route path="/painter" component={Painters} />
				</div>
			</BrowserRouter>
		);
	}
}
export default App;

ReactDOM.render(<App />, document.getElementById('construction'));
