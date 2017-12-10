import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ContentNew from 'ContentNew';
import NewsWorld from 'NewsWorld';

class News extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      thenews:[],
      theworld: []
    }
  }
  componentDidMount() {
    this.getTheNews();
    this.getTheWorld();
  }

  getTheNews() {
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc615667b5108650292af9"},"limit":1, "oder":"startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					thenews: response.data
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
  getTheWorld() {
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc610b67b5108650292af6"},"limit":1, "oder":"startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					theworld: response.data
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
    let listNews = this.props.data && this.props.data.map((item, index) => {
      return (
        <div className="wh-cate" key={item.id}>
          <div className="item-cate" style={{'backgroundImage':`url(${item.image})`}}>
            <a className="txt-link" href={`/#/detailnews/${item.id}`}>
              <img className="img-article" src={item.image}/>
            </a>
            <div className="caption fontW">
              <p><a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a></p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className={`news-content ${this.props.type}`} >
        <h3 className={`title-cate ${this.props.type}`}>{this.props.title}</h3>
        {listNews}
        <NewsWorld  type="hv-red" title="Tin Tức" data={this.state.thenews} />
        <NewsWorld  type="hv-blue" title="Tin thế giới" data={this.state.theworld} />
      </div>
    )
  }
}

News.propTypes = {
  data: PropTypes.array
}
module.exports = News;
