import React from 'react';
import axios from 'axios';

class MenuDetailNews extends React.Component{
  constructor(props, context) {
    super(props, context);
      this.state ={
        menunews: []
      };
    }
  componentDidMount() {
    this.getMenuNews();
  }
  onLoadPage() {
    window.location.reload();
  }
  getMenuNews (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59e60ca767b5108650292b20"}, "limit":4}')
    .then(response => {
      if (response) {
        this.setState({
          menunews: response.data
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
    let listMenuNews = this.state.menunews && this.state.menunews.map(item=> {
      return(
        <div className="item-cate" key={item.id} >
          <h4 className="title-cate fs14">
            <a href={`/#/detailnews/${item.id}`} onClick={this.onLoadPage.bind(this)} className="txt-link">{item.title}</a>
          </h4>
        </div>
      )
    })
    return (
      <div className="cate-content">
        <a className="txt-cate" href="#">
          <i className="fa fa-chevron-left left" aria-hidden="true"></i>
        </a>
        {listMenuNews}
        <a className="txt-cate" href="#">
          <i className="fa fa-chevron-right right" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
}

module.exports = MenuDetailNews;
