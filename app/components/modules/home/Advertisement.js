import React from 'react';
import axios from 'axios';

class Advertisement extends React.Component{
  render(){
    return (
      <div className="advers">
        <div className="item-adver" style={{'backgroundImage':`url(img/qcmoi.png)`}}>
          <a className="txt-link">
            <img className="img-article" src="img/qcmoi.png"/>
          </a>
        </div>
        <p className="text-qc colordate fs14">
          Quảng cáo
        </p>
      </div>
    )
  }
}
module.exports = Advertisement;
