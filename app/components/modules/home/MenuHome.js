import React from 'react';
import axios from 'axios';

class MenuHome extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      menuhome: []
    }
  }

  getListMenu() {
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc6ab567b5108650292b00"} , "limit":10, "order": "title ASC"} ' )
    .then(response => {
      if (response) {
        this.setState({
          menuhome: response.data
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
  componentDidMount() {
    this.getListMenu();
  }
  render(){
    let listmenuhome = this.state.menuhome && this.state.menuhome.map((item, index) => {
      return (
        <p className="bd-menu fs14 fontW" key={item.id}>
          <a className="txt-link" href={`/#/detailnews/${item.id}`}>{item.title}</a>
        </p>
      )
    })
    return (
      <div className="content-one">
        <div className="menu">
          {listmenuhome}
        </div>
      </div>
    )
  }
}

module.exports = MenuHome;
