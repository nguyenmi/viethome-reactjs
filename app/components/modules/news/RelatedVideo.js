import React from 'react';
import axios from 'axios';

class RelatedVideo extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      relatedvide: []
    };
  }
  componentDidMount() {
    this.getRelateVideo();
  }
  getRelateVideo (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dd93b567b5108650292b10"}, "limit":3}')
    .then(response => {
      if (response) {
        this.setState({
          relatedvide: response.data
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
    let listRelatedVideo = this.state.relatedvide && this.state.relatedvide.map(item=> {
      return (
        <div className="videolq-content" key={item.id}>
          <div className="pd-videolqs">
            <div className="item-videolq" style={{ 'backgroundImage':`url(${item.image})`}}>
              <a href={`/#/detailnews/${item.id}`}>
                <img className="img-article" src={item.image} />
              </a>
            </div>
            <div className="title-videolq fs15">
              <h4>
                <a className="txt-link" href={`/#/detailnews/${item.id}`}>{item.title}</a>
              </h4>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="video-newlq">
        {
          listRelatedVideo
        }
      </div>
    )
  }
}

module.exports = RelatedVideo;
