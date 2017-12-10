import React from 'react';

class Footer extends React.Component{

  render(){
    return (
      <div>
        <div className="footer">
          <div className="left">
            <div className="top">
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Tin tức</a>
                  <ul >
                    <li className="text-foot fs14"><a className="txt-link" href="#">Tin nóng</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Tin Vn</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Tin Cộng đồng</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Tin thế giới</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Kinh doanh</a>
                  <ul >
                    <li className="text-foot fs14"><a className="txt-link" href="#">Doanh nghiệp</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">PR Doanh Nghiệp</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Đời sống</a>
                  <ul >
                    <li className="text-foot fs14"><a className="txt-link" href="#">Sức khỏe</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Gia đình</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Mẹ & bé</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Thể thao</a>
                  <ul >
                    <li className="text-foot fs14"><a className="txt-link" href="#">Bóng đáng</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Tennis</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Các môn khác</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bottom pdt20">
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Công nghệ</a>
                  <ul >
                    <li className="text-foot fs14"><a className="txt-link" href="#">Tin Công nghệ</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Sản phẩm</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Giải trí</a>
                  <ul >
                    <li className="text-foot fs14"><a className="txt-link" href="#">Game</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Mussic</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Celebrity</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Phong thủy tử vi</a>
                  <ul >
                    <li className="text-foot fs14"><a className="txt-link" href="#">Phong thủy đời sống</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Xem tử vi</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Lịch hoàng đạo</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="tl-footer">
                <li className="title-foot fontU fontW fs15"><a className="txt-link" href="#">Giải pháp doanh nghiệp</a>
                  <ul>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Nhận diện thương hiệu</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Tư vấn IT</a></li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">Phát triển & Thiết kế web</a>
                    </li>
                    <li className="text-foot fs14"><a className="txt-link" href="#">E-comerce</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <h4 className="title-right">Danh mục khác</h4>
              <div className="text">
                <p className="font">
                  <a className="txt-link" href="#">
                    <i className="fa fa-user-circle-o btn-icon" aria-hidden="true"></i>Kết bạn- Dating
                  </a>
                </p>
                <p className="font">
                  <a className="txt-link" href="#">
                    <i className="fa fa-lightbulb-o btn-icons" aria-hidden="true"></i>Ý tưởng khởi nghiệp - Start-up
                  </a>
                </p>
                <p className="font">
                  <a className="txt-link" href="#">
                    <i className="fa fa-bullhorn btn-icon" aria-hidden="true"></i> Quảng cáo
                  </a>
                </p>
              </div>
            </div>
            <div className="scroll-foot">
              <p className="scroll fontW fs14 colorBl">
                Về đầu trang <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
              </p>
            </div>
            <div className="adver-foot" style={{'backgroundImage':`url(img/quangcaof1.png)`}}>
              <a href="#">
                <img className="img-article" src="img/quangcaof1.png"/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="logo" style={{'backgroundImage':`url(img/logotintuc.png)`}}>
            <img className="img-article" src="img/logotintuc.png" />
          </div>
          <div className="text_1">
            <p>&copy; Copyright 2011 <span className="colorBl fs14">VietHome.today</span> All right reverved.</p>
            <p>&copy; VietHome giử bản quyền nội dung trên website này.</p>
          </div>
          <div className="text_2">
            Phát triển bởi: <span className="color-green ">Toàn cầu xanh</span>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Footer;
