import React from 'react';

class Account extends React.Component{
  render(){
    return (
      <div className="account-body">
        <div className="account-content">
          <div className="regester">
            <p className="regester-body">
              <i className="fa fa-user user" aria-hidden="true"></i>
              <a className="txt-link" href="/#/register">Đăng ký</a>
            </p>
          </div>
          <div className="login">
            <p className="login-body">
              <i className="fa fa-lock lock" aria-hidden="true"></i>
              <a className="txt-link" href="/#/login">Đăng Nhập</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Account;
