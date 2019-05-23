import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import EngineerSignIn from './EngineerSignIn.jsx';
import {storage} from "../firebase"
class EngineerSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username: '',
            password: '',
            sitelocation: '',
            phonenumber: '',
            toggleSignUp: true,
						toggleSignIn: false,
						image : null,
            url : '' 
        };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        if(e.target.files[0]){
            const image =  e.target.files[0]
            this.setState(()=>({image}))
        }
    }
    handleUpload(){
    const {image} = this.state;
    const uploadTask =  storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(`state_changed` ,
     (snapshot)=>{
        const progress = Math.rond((snapshot.bytesTransferred / snapshot.totalBytes)*100)
        this.setState({progress})
    } , (error)=>{
    } , ()=>{
        storage.ref(`images`).child(image.name).getDownloadURL().then(url=>{
            console.log(url)
            this.setState({url})
        });
    })
    }
    handleChange(e){
        if(e.target.files[0]){
            const image =  e.target.files[0]
            this.setState(()=>({image}))
        }
    }
    handleUpload(){
    const {image} = this.state;
    const uploadTask =  storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(`state_changed` ,
     (snapshot)=>{
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
        
    } , (error)=>{
    } , ()=>{
        storage.ref(`images`).child(image.name).getDownloadURL().then(url=>{
						this.setState({url})
						console.log(url)
        });
    })
    }
    changed(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    engineerSignUp() {
        var { fullname, username, password, sitelocation, phonenumber , url } = this.state;
        var engineer = { fullname, username, password, sitelocation, phonenumber , url };
        console.log(engineer);
        var that = this;
        fetch('/signupEngineer', {
            method: 'POST',
            body: JSON.stringify(engineer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response.success);
                if (response.success === 'Sign up as engineer successful') {
                    that.setState({
                        username: '',
                        password: '',
                        toggleSignIn: true,
                        toggleSignUp: false
                    });
                } else {
                    console.log(response.error);
                }
            });
    }


	render() {
		return (
			<div>
				{this.state.toggleSignUp ? (
					<div>
						<NavLink to="/" activeStyle={{ color: 'purple' }}>
							<button value="Go Back home">Go Back home</button>
						</NavLink>{' '}
						<br />
						<br />
						<h1>Sign Up for Engineers</h1>
												<br />
                        <br />
						<h1> Upload image </h1>
												<br />
                        <br />	
                        <input type="file" name = "image" onChange = {this.handleChange}/>
                        <br />
                        <br />
                        <button onClick={this.handleUpload.bind(this)}>Upload</button>
                        <br />
                        <br />
												<img src = {this.state.url || 'https://via.placeholder.com/150' } alt = "uploaded image" height = "150" width = "200" />
                        <br />
                        <br />
						<input
							type="text"
							name="fullname"
							placeholder="fullName"
							onChange={this.changed.bind(this)}
						/>{' '}
						<br />
						<br />
						<input type="text" name="username" placeholder="userName" onChange={this.changed.bind(this)} />
						<br />
						<br />
						<input
							type="password"
							name="password"
							placeholder="password"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<br />
						<input
							type="text"
							name="sitelocation"
							placeholder="Site Location"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<br />
						<input
							type="tel"
							name="phonenumber"
							placeholder="Phone Number"
							onChange={this.changed.bind(this)}
						/>
						<br />
						<br />
						<br />
						<button onClick={this.engineerSignUp.bind(this)}>Sign Up</button>
						<br />
						<br />
						<NavLink to="/signinEngineer" activeStyle={{ color: 'purple' }}>
							<button value="Already Signed up? Sign In">Already Signed up? Sign In</button>
						</NavLink>
					</div>
				) : (
					<EngineerSignIn />
				)}
			</div>
		);
	}
}

export default EngineerSignUp;
