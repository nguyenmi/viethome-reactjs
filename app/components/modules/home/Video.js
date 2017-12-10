import React from 'react';
import axios from 'axios';

class Video extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      videohome: []
    };
	}
	componentDidMount() {
    this.getVideo();
  }

  getVideo (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dd93b567b5108650292b10"}}')
    .then(response => {
      if (response) {
        this.setState({
          videohome: response.data
        },() => {
          setTimeout(() => {
            $(".video").slick({
              prevArrow: '.next-prev .left',
              nextArrow: '.next-prev .right',
            });
          }, 500)
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  render(){
    let listvideo = this.state.videohome && this.state.videohome.map(item=> {
      return (
        <div className="list-videohome" key={item.id}>
          <div className="item-video" style={{'backgroundImage':`url(${item.image})`}}>
            <a className="txt-link" href={`/#/detailnews/${item.id}`}>
              <img className="img-article" src={item.image}/>
            </a>
          </div>
          <div className="caption">
            <h4 className="title-video">
              <a className="txt-link" href={`/#/detailnews/${item.id}`}>{item.title}</a>
            </h4>
            <p className="text-video fs15">
              {item.body}
            </p>
            <div className="page">
              <p>2 trong 16</p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="cate-video">
        <div className="video ">
          {
            listvideo
          }
        </div>
        <div className="next-prev">
          <i className="fa fa-chevron-left left" aria-hidden="true"></i>
          <i className="fa fa-chevron-right right" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

module.exports = Video;
