import React from 'react';
import axios from 'axios';

class MenuVideo extends React.Component{
  render(){
    return (
      <div className="menu-video">
        <div className="titles-video">
          <div className="video-wh">
            <h4 className="logo-video"><a className="txt-link txt-video" href="#" >Video</a></h4>
            <div className="cate-videos">
              <h5 className="new-video"><a className="txt-link" href="#">Tin nóng</a></h5>
              <h5 className="new-video"><a className="txt-link" href="#">Tin VN</a></h5>
              <h5 className="new-video"><a className="txt-link" href="#">Tin cộng đồng</a></h5>
              <h5 className="new-video"><a className="txt-link" href="#">Tin thế giới</a></h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = MenuVideo;
