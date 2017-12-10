import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class NewsWorld extends React.Component{
  constructor(props, context) {
    super(props, context);
  }
  render(){
    let listtheworld = this.props.data && this.props.data.map(item => {
      return (
        <div className="articleBody" key = {item.id}>
          <div className="wh-content" style={{'backgroundImage':`url(${item.image})`}}>
            <a className="txt-link" href={`/#/detailnews/${item.id}`}>
              <img className="img-article" src={item.image}/>
            </a>
          </div>
          <div className="nd-cate">
            <p className={`text-cate ${this.props.type}`}>
              <a className={`${this.props.type}`} href="#">{this.props.title}</a>
            </p>
            <h4 className="title-cates fs15"><a className="txt-link" href={`/#/detailnews/${item.id}`}>{item.title}</a></h4>
          </div>
        </div>
      )
    })
    return (
      <div>
        {listtheworld}
      </div>
    )
  }
}

NewsWorld.propTypes = {
  data: PropTypes.array
}
module.exports = NewsWorld;
