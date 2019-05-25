import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Profiles } from './Profiles.jsx';

class StoneBuilders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allStoneBuilders: []
		};
	}
	componentDidMount() {
		let that = this;
		fetch('/stoneBuilder')
			.then((response) => response.json())
			.then((data) => that.setState({ allStoneBuilders: data }))
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<NavLink to="/" activeStyle={{ color: 'white' }}>
					<h2 id="homeButton">Home</h2>
				</NavLink>
				{this.state.allStoneBuilders.length === 0 ? (
					<h1> there is no StoneBuilders provided yet</h1>
				) : (
					<table>
						<tbody>
							{this.state.allStoneBuilders.map((user, i) => (
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
										<strong>status:</strong>
									</td>
									<td>{user.status}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>role:</strong>
									</td>
									<td>{user.role}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<NavLink to={'/engineerworker/' + user.id} activeStyle={{ color: 'purple' }}>
											<button value="GoToProfile" className="Button">
												Go To Profile
											</button>
										</NavLink>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		);
	}
}

export default StoneBuilders;
