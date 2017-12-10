import React from 'react';
import Login from 'Login';


class AccountLogin extends React.Component{
  render(){
    return (
      <div className="hold-transition login-page" >
        <Login/>
        {this.props.children}
      </div>
    )
  }
}

module.exports = AccountLogin;
