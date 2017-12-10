import React from 'react';
import MenuHome from 'MenuHome';
import axios from 'axios';

class HotNews extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      hotnews: []
    };
  }
  componentDidMount() {
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"5a2d41a467b5108650292b9b"}, "limit" : 1,"order":"startDate DESC"}')
    .then(response => {
  		if (response) {
  			this.setState({
  				hotnews: response.data
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
    let hotnew = this.state.hotnews && this.state.hotnews.map(item => {
      return(
        <div className="item-catenews" key={item.id} style={{'backgroundImage':`url(${item.image})`}}>
          <a href={`/#/detailnews/${item.id}`}>
            <img className="img-article" src={item.image} />
          </a>
          <div className="title-date">
            <h4 className="title">
              <a className="txt-link" href={`/#/detailnews/${item.id}`}>{item.title}</a>
            </h4>
            <div className="colordate">
              <i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
              <p className="wdate pdr5">{item.startDate}</p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="cate-menu">
        {hotnew}
        <div className="list-menu">
          <MenuHome/>
        </div>
      </div>
    )
  }
}

module.exports = HotNews;
