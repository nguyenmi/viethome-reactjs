import React from 'react';
import axios from 'axios';

class Title extends React.Component{
  render(){
    return (
      <div className="title-new">
        <div className="br-title">
          <h4 className="news-title fs13 fontU">Tin mới nhất</h4>
          <div className="titleContent">
            <div className="titleBody">
              <div className="time fs13">2 phút trước</div>
              <p className="text-time fs13">
                <a className="txt-link" >Mcllroy chiến thắng cuộc bình chọn...</a>
              </p>
            </div>
            <div className="titleBody">
              <div className="time fs13">
                <p >1 giờ trước</p>
              </div>
              <p className="text-time fs13">
                <a className="txt-link" >Robot mô phỏng người đầu tiên mua vé</a>
              </p>
            </div>
            <div className="titleBody">
              <div className="time fs13">
                <p >15/12/2014</p>
              </div>
              <p className="text-time fs13">
                <a className="txt-link " >Giá vàng dè dặt giảm theo thế giới ,USD hạ nhiệt</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Title;
