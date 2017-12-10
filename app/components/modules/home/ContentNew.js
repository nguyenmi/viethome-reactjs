import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class ContentNew extends React.Component{
  constructor(props, context) {
    super(props, context);
  }
  render(){
    return (
      <div className={`content ${this.props.type}`} key = {this.props.data.id}>
        <div className="wh-content" style={{'backgroundImage':`url(${this.props.data.imgOne})`}}>
          <a className="txt-link" href="#">
            <img className="img-article" src={this.props.data.imgOne}/>
          </a>
        </div>
        <div className="nd-cate">
          <p className="text-cate hv-red">
            <a className="hv-red" href="#">{this.props.data.cateOne}</a>
          </p>
          <h4 className="title-cates fs15">
            <a className="txt-link" href="#">{this.props.data.titleCateOne}</a>
          </h4>
        </div>
      </div>
    )
  }
}

ContentNew.propTypes = {
  data: PropTypes.object
}
module.exports = ContentNew;
