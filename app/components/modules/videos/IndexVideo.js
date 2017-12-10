import React from 'react';
import axios from 'axios';

class IndexVideo extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
        listvideo: []
    };
  }
  componentDidMount() {
    this.getListVideo();
  }
  getListVideo (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59e6d68267b5108650292b23"}}')
    .then(response => {
      if (response) {
        this.setState({
          listvideo: response.data
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
    let ListVideo = this.state.listvideo && this.state.listvideo.map(item=> {
      return(
        <div className="content" key={item.id}>
          <div className="pd-content">
            <div className="item-list" style={{'backgroundImage':`url(${item.image})`}}>
              <a href={`/#/detailvideo/${item.id}`}>
                <img className="img-article" src={item.image}/>
              </a>
            </div>
            <div className="cate-listvideo">
              <h4><a href={`/#/detailvideo/${item.id}`} className="txt-link">{item.title}</a></h4>
            </div>
            </div>
        </div>
      )
    })
    return (
      <div className="pagevideo-content">
        <div className="listvideo-content">
          <div className="title-list">
            <img src="img/logovideo.png"/>
            <h4 className="text-list">Gải trí</h4>
          </div>
          <div className="list-video">
            {ListVideo}
          </div>
          <div className="seemore">
            <p className="bd-seemore">
              <a className="txt-link" href="#">Xem Thêm
                <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = IndexVideo;
