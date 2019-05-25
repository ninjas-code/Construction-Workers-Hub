import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class WorkerMainPage extends React.Component {
    constructor(props){
        super(props)
            this.state={
                engName : ""
            };
    };

    componentDidMount(){
        var that =  this
        const token = localStorage.getItem('token');
        fetch('/workerMainPage', {
            method: 'get',
            headers: {'x-access-token': token }
        }).then(function(response) {
            if (response.status == 200) {
                response.json().then((body) => {
                     console.log(body);
                    that.setState({
                        engName : body.engineerName
                    }
                    )
                    console.log(that.state);
                    
                });
            } else {
                response.then(() => {
                    console.log("err")
                });
            }
        });
    }

    // chackOrder(){
    //     //console.log(this.state.engName);
    //     window.confirm(`this ${this.state.engName} sent you construction request daccept or not` )


    // }


    render() {
        console.log(this.props);
        return (
            <div>
                <h2 style={{ margin: '10px', display: 'block', color: 'darkOrange' }}>
                    <strong>{'WELCOME ' + this.props.fullName + ' TO YOUR PROFILE'}</strong>
                </h2>
                <br />
                <img
					src={this.props.url ||
						 'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'}
                    alt="uploaded image"
                    height="150"
                    width="200"
                />
                <h2 style={{ color: 'white' }}>
                    {' '}
                    {'Name:  '} {this.props.fullName}
                </h2>
                <h2 style={{ color: 'white' }}>
                    {' '}
                    {'Phone Number:  '} {this.props.phoneNumber}
                </h2>
                <h2 style={{ color: 'white' }}>
                    {' '}
                    {'ExperienceLevel:  '} {this.props.experienceLevel}
                </h2>
                <h2 style={{ color: 'white' }}>
                    {' '}
                    {'expectedSalary:  '} {this.props.expectedSalary}
				</h2>
				{this.state.engName ?
				<h1 style={{ color: 'darkOrange'}}> you have request from {this.state.engName} , check your mobile </h1>
				: <h2 style={{color:"darkorange"}}>you dont have any request yet,</h2>}
                {/* <button onClick = {this.chackOrder}>Show Orders</button> */}
            </div>
        );
    }
}

export default WorkerMainPage;