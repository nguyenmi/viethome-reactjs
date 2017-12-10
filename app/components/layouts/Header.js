import React from 'react';

class Header extends React.Component{
  constructor(props, context) {
    super(props, context);
  }
  clickBtn() {
    $('.navigation').toggleClass("show");
  }
  onLoadPage() {
    window.location.reload();
  }
  render(){
    return (
      <div className="header">
        <div className="logo">
          <a href="/"><img src="img/logo.png"/></a>
        </div>
        <div className="menu">
          <button id="menu-show" className="bg-menu" onClick={this.clickBtn.bind(this)}>
            <i className="fa fa-bars btn-icon" aria-hidden="true"></i>
            <p className="text-menu">Danh Mục</p>
          </button>
          <div className="navigation" id="head">
            <ul className="menu-content">
              <li className="title-menu"><a className="txt-link" href="/#/news" onClick={this.onLoadPage.bind(this)} >News</a></li>
              <li className="title-menu" ><a className="txt-link" href="/#/video" onClick={this.onLoadPage.bind(this)} >Video</a></li>
            </ul>
          </div>
        </div>
        <div className="search">
          <img className="img-search" src="img/btn_search.png"/>
          <form className="form-search">
            <input className="text-search" type="text" name="search" placeholder="TÌM KIẾM"/>
          </form>
        </div>
        <div className="mxh">
          <a href="#"><img src="img/iconfacebook.png"/></a>
          <a href="#"><img className="btn-icon" src="img/icongoogle.png"/></a>
          <a href="#"><img className="btn-icon" src="img/icontw.png"/></a>
          <a href="#"><img className="btn-icon" src="img/iconin.png"/></a>
        </div>
      </div>
    )
  }
}
module.exports = Header;
