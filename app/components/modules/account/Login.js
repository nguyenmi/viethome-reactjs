import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false,
    };
  }

  login(e) {
    e.preventDefault();
    if(this.state.username && this.state.password){
      axios.post('http://49.156.53.36:3000/api/accounts/login?include=user',{username: this.state.username, password: this.state.password})
      .then((response) => {
        let JsonResponse = response;
        console.log(JsonResponse.data.id);
        if (JsonResponse.data) {
          // luu userInfo > localStorage
          localStorage.setItem('user', JSON.stringify(JsonResponse.data));
          this.setState({redirect: true});
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render(){
    if (this.state.redirect) {
      window.location="/#/admin"
    }
   if(localStorage.getItem('user')){
     window.location="/#/admin"
    }
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="">Login</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={this.login.bind(this)}>
            <div className="form-groups has-feedback">
              <input type="text" name="username" value={this.state.username} className="form-control"  onChange={this.onChange.bind(this)} placeholder="User Name" />
              <span className="fa fa-user user form-control-feedback"></span>
            </div>
            <div className="form-groups has-feedback">
              <input type="password" name="password" value={this.state.password} className="form-control" onChange={this.onChange.bind(this)} placeholder="Password" />
              <span className="fa fa-lock lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="submit" className="btn-login">Sign In</button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p className="or">- OR -</p>
            <a href="#" className="btn-flat">
              <i className="fa fa-facebook facebook"></i>
              <p className="text-face">Sign in using Facebook</p>
            </a>
            <a href="#" className=" btn-flats">
              <i className="fa fa-google-plus youtube"></i>
              <p className="text-face"> Sign in using Google+</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Login;
