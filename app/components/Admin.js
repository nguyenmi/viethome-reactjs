import React from 'react';
import AdminHeader from 'AdminHeader';
import AdminNavbar from 'AdminNavbar';

class Admin extends React.Component{
  render(){
    return (
      <div className="admin-wrapper" >
        <AdminHeader/>
        <section className="main-section">
          <AdminNavbar/>
          {this.props.children}
        </section>
      </div>
    )
  }
}

module.exports = Admin;
