import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class IndexNewUpdate extends React.Component{
  constructor(props, context) {
		super(props, context);
	}
  render(){
    let ListNewsUpdate = this.props.data && this.props.data.map((item, index) => {
      if (index !== 0) {
        return (
          <div className="lq-news" key ={item.id}>
            <div className="wh-img" style={{'backgroundImage':`url(${item.image})`}}>
              <a className="txt-link" href={`/#/detailnews/${item.id}`}>
                <img className="img-article" src={item.image}/>
              </a>
            </div>
            <div className="caption">
              <h4 className="title-one fs14">
                <a className="txt-link" href={`/#/detailnews/${item.id}`}>{item.title}</a>
              </h4>
              <p className="colordate fs14">
                <i className="fa fa-calendar-o" aria-hidden="true"></i> {item.startDate}
                <i className="fa fa-comments-o" aria-hidden="true"></i> {item.view}
              </p>
            </div>
          </div>
        )
      }
    })
    return (
      <div className="news-one">
        <div className={`wh-news ${this.props.type}`} key={this.props.data[0].id}>
          <div className="item-newone" style={{'backgroundImage':`url(${this.props.data[0].image})`}}>
            <a className="txt-link" href={`/#/detailnews/${this.props.data[0].id}`}>
              <img className="img-article" src={this.props.data[0].image}/>
            </a>
            <p className="caption colorW fontW fs16">
              <a className="colorW" href={`/#/detailnews/${this.props.data[0].id}`}>
                {this.props.data[0].title}
              </a>
            </p>
          </div>
        </div>
        {ListNewsUpdate}
      </div>
    )
  }
}

IndexNewUpdate.propTypes = {
  data : PropTypes.array
}
module.exports = IndexNewUpdate;
