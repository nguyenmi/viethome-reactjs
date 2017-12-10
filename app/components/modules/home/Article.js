import React from 'react';
import axios from 'axios';
import ArticleLeft from 'ArticleLeft';
import PropTypes from 'prop-types';

class Article extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      listarticle: []
    };
  }
  componentDidMount() {
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc632c67b5108650292afb"}, "limit" : 4}')
      .then(response => {
  		if (response) {
  			this.setState({
  				listarticle: response.data
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
      this.state.listarticle && this.state.listarticle.length
      ? <ArticleLeft data={this.state.listarticle} type="main"/>
      : null
    )
  }
}

Article.propTypes = {
  data: PropTypes.object
}
module.exports = Article;
