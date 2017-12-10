import React from 'react';
import IndexCate from 'IndexCate';
import IndexPost from 'IndexPost';


class AdminNavbar extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      userInfo: {},
        showName: []
    };
  }
  componentDidMount(){
    if(localStorage.getItem("user")){
      this.setState({
        userInfo: JSON.parse(localStorage.getItem("user"))
      })
      // this.getNameUser();
    }
    else{
    }
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
    return (
      <div className="main-sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="img/giaitri1.png" className="img-circle" alt="User Image"/>
          </div>
          <div className="pull-left info">
              <p className="name-user">{this.state.userInfo.user ? this.state.userInfo.user.firstName : ''}</p>
              <a href="#" className="online">
                <i className="fa fa-circle text-success icon-online"></i>Online
              </a>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li className="active treeview">
            <a href="#">
                <i className="fa fa-dashboard icon-das"></i>
                <span>Dashboard</span>
                <span className="pull-right-container"></span>
            </a>
          </li>
        </ul>
        <ul className="sidebar-menus">
          <li className="treeviews ">
            <a href="#/admin/category" className="show1">
                <i className="fa fa-circle-o icon-form"></i>
                <span>Category</span>
            </a>
          </li>
        </ul>
        <ul className="sidebar-menus">
          <li className="treeviews ">
            <a href="#/admin/post" className="show1">
                <i className="fa fa-circle-o icon-form"></i>
                <span>Post</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = AdminNavbar;
