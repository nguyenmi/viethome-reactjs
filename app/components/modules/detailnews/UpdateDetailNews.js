import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class UpdateDetailNews extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      updatedetailnews: []
    };
  }
  componentDidMount() {
    this.getUpdateDetailNews();
  }
  onLoadPage() {
    window.location.reload();
  }
  getUpdateDetailNews (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dd93b567b5108650292b10"}, "limit":4}')
    .then(response => {
      if (response) {
        this.setState({
          updatedetailnews: response.data
        },() => {
          setTimeout(() => {}, 500)
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  render(){
    let listUpdateDetailNews = this.state.updatedetailnews && this.state.updatedetailnews.map(item=> {
      return (
        <div className="content-writing" key={item.id}>
          <div  className="img-writing" style={{'backgroundImage':`url(${item.image})`}}>
            <a href={`/#/detailnews/${item.id}`} onClick={this.onLoadPage.bind(this)}>
              <img  className="img-article" src={item.image}/>
            </a>
          </div>
          <h4>
            <a className="txt-link" href={`/#/detailnews/${item.id}`} onClick={this.onLoadPage.bind(this)}>{item.title}</a>
          </h4>
        </div>
      )
    })
    return (
      <div className="writing-page">
        <h3 className="title-writing">Bài viết gần nhất:</h3>
        {
          listUpdateDetailNews
        }
      </div>
    )
  }
}

module.exports = UpdateDetailNews;
