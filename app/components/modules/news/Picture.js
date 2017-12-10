import React from 'react';
import axios from 'axios';

class Picture extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      showimage: []
    };
  }
  clickBtn(event) {
    var images = document.getElementById("divId").getElementsByTagName("div");
    event = event || window.event;
    var targetElement = event.target || event.srcElement;

    if (targetElement.tagName == "IMG")
    {
        mainImage.src = targetElement.getAttribute("src");
    }
  }
  componentDidMount() {
    this.getListImage();
  }
  getListImage (){
    axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59ec440c67b5108650292b2b","type":"images"}}')
    .then(response => {
      if (response) {
        this.setState({
          showimage: response.data[0]
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
    let ImageItem = this.state.showimage && this.state.showimage.images && this.state.showimage.images.map((item, index) => {
      if(index < 4){
        return (
          <img className="wh-thumbnai" key={item.id} src={item.imageUrl} />
        )
      }
    })
    return (
      <div className="libra">
        <div className="content-libra" key={this.state.showimage.id}>
          <div className="img-libra">
            <img width="100%" height="455px" id="mainImage" src={this.state.showimage && this.state.showimage.images && this.state.showimage.images[0].imageUrl} />
            <h4 className="title-libra">
              <a  className="txt-link" href={`/#/detailnews/${this.state.showimage.id}`}>{this.state.showimage.title}</a>
            </h4>
          </div>
          <br/>
          <div className="thumbnai">
            <div className="thumbnai-mg">
              <div className="img-thumbnai" id="divId" onClick={this.clickBtn.bind(this)}>
                {ImageItem}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Picture;
