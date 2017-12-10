import React from 'react';
import axios from 'axios';

class SeemoreVideo extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      seemorevideo: []
    };
  }
  componentDidMount() {
    this.getSeeMoreVideo();
  }

  getSeeMoreVideo (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dd93b567b5108650292b10"}, "limit":4}')
    .then(response => {
      if (response) {
        this.setState({
          seemorevideo: response.data
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
    let listSeeMoreVideo = this.state.seemorevideo && this.state.seemorevideo.map(item=> {
      return (
        <div className="content" key={item.id}>
          <div className="item-videolq" style={{'backgroundImage':`url(${item.image})`}}>
            <a href={`/#/detailnews/${item.id}`}><img className="img-article" src={item.image}/></a>
          </div>
          <h4 className="title-videolq fs15">
            <a className="txt-link" href={`/#/detailnews/${item.id}`}>{item.title}</a>
          </h4>
        </div>
      )
    })
    return (
      <div className="video-lq">
        { listSeeMoreVideo }
      </div>
    )
  }
}

module.exports = SeemoreVideo;
