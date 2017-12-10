import React from 'react';
import axios from 'axios';

class IndexDetailVideos extends React.Component{
  constructor(props, context) {
    super(props, context);
      this.state ={
        contentvideo: []
      };
    }
  componentDidMount() {
    this.getPlayVideo();
  }
  getPlayVideo (){
    axios.get('http://49.156.53.36:3000/api/posts/'+this.props.detailId)
    .then(response => {
      if (response) {
        this.setState({
          contentvideo: response.data
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
      <div className="left-detailvideo"  key={this.state.contentvideo.id}>
        <div className="pd-detailvideo">
          <div className="item-detailvideo" style={{ 'backgroundImage':`url(${this.state.contentvideo.image})`}}>
            <img className="img-article" src={this.state.contentvideo.iamge}/>
          </div>
          <h4 className="title-videodetail">
            <a href="#" className="txt-link">{this.state.contentvideo.title}</a>
          </h4>
          <div className="cate-new">
            <h4 className="title-catenew">tin tức</h4>
            <p className="date-detailvideo">{this.state.contentvideo.date}</p>
          </div>
          <div className="descreption">
            <p>{this.state.contentvideo.body}</p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = IndexDetailVideos;
