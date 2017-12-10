import React from 'react';
import axios from 'axios';


class Regester extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      email:'',
      password: '',
      confirm_password:'',
      msg: '',
    }
  }
  componentDidMount() {
  }

  validate() {
    if(this.state.username === ''){
      this.setState({
        msg:'Bạn chưa nhập UserName',
        type: 'username'
      });
      return false;
    }
    else if (this.state.email === '') {
      this.setState({
        msg:'Bạn chưa nhập Email',
        type: 'email'
      });
      return false;
    }
    else if (this.state.password === '') {
      this.setState({
        msg:'Bạn chưa nhập Password',
        type: 'password'
      });
      return false;
    }
    else if (this.state.password !== this.state.confirm_password) {
      this.setState({
        msg:'Wrong',
        type: 'password'
      });
      return false;
    }
    else {
      return true;
    }
  }

  CreateAccount(e) {
    e.preventDefault();
    if(this.validate()){
      axios({
        method: 'post',
        url: `http://49.156.53.36:3000/api/accounts`,
        data: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }
      })
      .then(response => {
        if (this.state.title !== '' && this.state.description !== '') {
          alert('Create Account Success')
        }
        <Redirect to="/login"/>
      })
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="">Đăng ký</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">
            {
              this.state.msg
              ? <span>{this.state.msg}</span>
              : null
            }
          </p>
          <form onSubmit={this.CreateAccount.bind(this)}>
            <div className="form-groups has-feedback">
              <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange.bind(this)} placeholder="User Name" />
              <span className="fa fa-user-o form-control-feedback"></span>
            </div>
            <div className="form-groups has-feedback">
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange.bind(this)} placeholder="Email" />
                <span className="fa fa-envelope-o form-control-feedback"></span>
            </div>
            <div className="form-groups has-feedback">
              <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.onChange.bind(this)} placeholder="Password" />
              <span className="fa fa-unlock-alt form-control-feedback"></span>
            </div>
            <div className="form-groups has-feedback">
              <input type="password" className="form-control" name="confirm_password" id="confirm_password" value={this.state.confirm_password} onChange={this.onChange.bind(this)} placeholder="confirm_password"/>
              <span className="fa fa-unlock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="submit" className="btn-login">Sign up</button>
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
module.exports = Regester;
