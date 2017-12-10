import React from 'react';
import Header from 'Header';
import Footer from 'Footer';
import Account from 'Account';


class Main extends React.Component{
  render(){
    return (
      <div className="home-page">
        <Account/>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

module.exports = Main;
