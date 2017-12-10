import React from 'react';
import axios from 'axios';

class ListDetailVideos extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      listvideodetail: []
    };
  }
	componentDidMount() {
		this.getListVideoDetail();
	}
  getListVideoDetail (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59e6d68267b5108650292b23"}}')
    .then(response => {
      if (response) {
        this.setState({
          listvideodetail: response.data
        },() => {
          setTimeout(() => {
            $(".video-one").slick({
              prevArrow: '.next-prev .left',
              nextArrow: '.next-prev .right',
              slidesToShow: 3,
              slidesToScroll: 1,
            });
          }, 500)
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  onLoadPage() {
    window.location.reload();
  }
  render(){
    let ListVideoDetail = this.state.listvideodetail && this.state.listvideodetail.map(item=> {
      return(
        <div className="content" key={item.id}>
          <div className="item-detail" style={{'backgroundImage':`url(${item.image})`}}>
            <a href={`/#/detailvideo/${item.id}`}>
              <img className="img-article" onClick={this.onLoadPage.bind(this)} src={item.image}/>
            </a>
          </div>
          <div className="cate-newvideo">
            <h4><a href={`/#/detailvideo/${item.id}`} onClick={this.onLoadPage.bind(this)} className="txt-link">{item.title}</a></h4>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className="list-detailvideo">
          <div className="content-titledetail ">
            <h4 className="title-detaivideo"><a href="#" className="txt-link">Nổi bật</a></h4>
            <div className="next-prev">
              <i className="fa fa-chevron-left left" ></i>
              <i className="fa fa-chevron-right right"></i>
            </div>
          </div>
            <div className="content-listdetail">
              <div className="slick-detailvideo video-one">
                {ListVideoDetail}
              </div>
            </div>
        </div>
      </div>
    )
  }
}

module.exports = ListDetailVideos;
