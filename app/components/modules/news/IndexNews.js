import React from 'react';
import axios from 'axios';
import SliderNews from 'SliderNews';
import NewUpdate from 'NewUpdate';
import Video from 'Video';
import Title from 'Title';
import CateView from 'CateView';
import Picture from 'Picture';
import PropTypes from 'prop-types';
import SeemoreVideo from 'SeemoreVideo';
import RelatedVideo from 'RelatedVideo';
import Advertisement from 'Advertisement';
import HotNews from 'HotNews';

class IndexNews extends React.Component{
  render(){
    return (
      <div>
        <Title/>
        <SliderNews/>
        <div className="main-next">
          <div className="content-main">
            <HotNews/>
            <div className="item-adv">
              <div className="img-adv" style={{ 'backgroundImage':`url(img/lefttintuc2.png)`}}>
                <img className="img-article" src="img/lefttintuc2.png" />
              </div>
            </div>
            <div className="view-cate">
              <h4 className="title-mostview">Xem Nhiều nhất</h4>
              <div className="conten-mostview">
                <CateView type="cate-view-news" />
              </div>
              <div className="seemore">
                <p className="bd-seemore">
                  <a className="txt-link" href="#">Xem Thêm
                    <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="content-video">
              <Video/>
              <RelatedVideo/>
            </div>
            <Picture/>
          </div>
          <div className="menu-main">
            <Advertisement/>
            <div className="news-update">
              <h4>Mới cập nhật</h4>
            </div>
            <NewUpdate/>
          </div>
        </div>
      </div>
    )
  }
}

IndexNews.propTypes = {
    data: PropTypes.object
}
module.exports = IndexNews;
