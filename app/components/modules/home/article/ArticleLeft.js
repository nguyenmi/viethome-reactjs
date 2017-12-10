import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class ArticleLeft extends React.Component{
  constructor(props, context) {
		super(props, context);
	}
	componentDidMount() {
	}
  render(){
    let listArticlLeft = this.props.data && this.props.data.map((item, index) => {
      if (index !== 0) {
        return (
          <div className="item-one" key={item.id}>
            <div className="pd-article">
              <div className="article-item" style={{'backgroundImage':`url(${item.image})`}} >
                <a className="txt-link" href={`/#/detailnews/${item.id}`}>
                  <img className="img-article " src={item.image}/>
                </a>
                <p className="caption fontW colorW fs15 posBL">
                  <a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a>
                </p>
              </div>
            </div>
          </div>
        )
      }
    })
    return (
      <div className="content-article">
        <div className="left-content">
          <div className={`left ${this.props.type}`} key={this.props.data[0].id}>
            <div className="news-item" style={{'backgroundImage':`url(${this.props.data[0].image})`}} >
              <a className="txt-link" href={`/#/detailnews/${this.props.data[0].id}`}>
                <img className="img-article" src={this.props.data[0].image}/>
              </a>
              <p className="caption colorW posBL">
                <a className="colorW" href={`/#/detailnews/${this.props.data[0].id}`} >
                  {this.props.data[0].title}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="right-content">
          {listArticlLeft}
        </div>
      </div>
    )
  }
}

ArticleLeft.propTypes = {
  data: PropTypes.array
}
module.exports = ArticleLeft;
