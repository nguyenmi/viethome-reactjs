import React from 'react';
import Login from 'Login';
import axios from 'axios';


class Header extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      userInfo: {},
        showName: [],
        redirect: false,
    };
  }
  logout(){
    localStorage.setItem("user",'');
    localStorage.clear();
    window.location.reload();
  }
  componentDidMount(){
    if(localStorage.getItem("user")){
      this.setState({
        userInfo: JSON.parse(localStorage.getItem("user"))
      })
      // this.getNameUser();
    }
    else{
      this.setState({redirect: true});
    }
    $(document).ready(function(){
      $(".icon-logouts").click(function(){
          $(".form-logout").slideToggle("slow");
      });
    });
  }
  getNameUser (){
    axios.get('http://49.156.53.36:3000/api/accounts/login?include=user')
    .then(response => {
      if (response) {
        this.setState({
            showName: response.data.user
        },() => {
          setTimeout(() => {
          }, 500)
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }


  render(){
    if(this.state.redirect){
      window.location="/#/login"
    }
    return (
      <header className="header-body">
        <div className="main-header">
          <a href="#/admin" className="logo-admin">
              <span className="logo-lg"><b>Admin</b>VIETHOME</span>
          </a>
          <nav className="navbar-body">
            <div className="setting">
              <a data-toggle="control-sidebar">
                <i className="fa fa-gears icon-set"></i>
              </a>
            </div>
            <div className="icon-logouts" >
              <i className="fa fa-angle-double-down icon-logout" aria-hidden="true"></i>
            </div>
            <div className="form-logout">
              <p onClick={this.logout.bind(this)} className="body-formlogout">Logout</p>
            </div>
            <div className="navbar-user">
              <a  className="dropdown-toggle" data-toggle="dropdown">
                <img src="img/giaitri1.png" className="user-image" alt="User Image"/>
                <div className="name hidden-xs">{this.state.userInfo.user ? this.state.userInfo.user.firstName : ''}</div>
              </a>
            </div>

          </nav>
        </div>
      </header>
    )
  }
}
module.exports = Header;
