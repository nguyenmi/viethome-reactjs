import React from 'react';
import IndexCate from 'IndexCate';
import IndexPost from 'IndexPost';
import {Redirect} from 'react-router-dom';

class AdminIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  componentDidMount(){
    if(localStorage.getItem("user")){
    }
    else{
      this.setState({redirect: true});
    }
  }
  render(){
    if(this.state.redirect){
      window.location="/#/login"
    }
    return (
      <div className="content-wrapper">
				<div className="content-header">
			    <h1 className="title-dash">Dashboard<small className="small-viet">Viethome</small></h1>
				</div>
        <IndexCate/>
				<IndexPost/>
      </div>
    )
  }
}

module.exports = AdminIndex;
