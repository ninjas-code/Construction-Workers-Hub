import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class LearnMore extends React.Component {
	render() {
		return (
			<div>
				<NavLink to="/" activeStyle={{ color: 'white' }}>
					<h2 id="homeButton">Home</h2>
				</NavLink>
				<h2 className="learnMore">
					<h1 id="title">Construction Workers Hub Documentation</h1>
					In some countries, there are many construction workers who are waiting under the hot <br /> blazing
					sun in a known place where a civil engineer comes by to choose some construction <br /> workers to
					work under him. <br />
					<br />
					In this Application we built called <strong>Construction Workers Hub</strong> solves this real world
					problem <br /> where the construction worker doesn’t have to wait in a specific place waiting for a
					potential <br /> job, nor does the engineer have to go to a specific place to choose the
					construction worker <br /> he needs. <br />
					<br />
					When you first open the <strong>Construction Workers Hub</strong> application you’ll see two
					buttons, one <br /> with a picture of a construction worker which takes you to the sign up page for
					the <br /> construction workers, after you sign up you’ll be directed to the sign in page then to
					your profile as a <br /> construction worker. The other button has a picture of an engineer which
					will take you to the <br /> engineer sign up page, after you sign up and sign in successfully,
					you’ll be directed to your <br /> profile as an engineer where you can click on one of the buttons
					to view all the construction <br /> workers by category, ex: stone builders button will take you to
					all the stone builder workers, <br /> which also applies to all the categories available. Once you
					click on one of the worker <br /> categories and then click on go to profile you’ll be directed to
					that worker’s profile you’ve <br /> chosen, there you can book that worker provided an end date and
					you can also message him <br /> from the application itself if you need to.
				</h2>
			</div>
		);
	}
}
export default LearnMore;
