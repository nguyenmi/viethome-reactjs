import React from 'react';
import axios from 'axios';
import MenuDetailNews from 'MenuDetailNews';
import IndexDetailNews from 'IndexDetailNews';

class DetailNews extends React.Component{
  render(){
    return (
      <div>
        <MenuDetailNews/>
        <div className="boder-bottom"></div>
        <IndexDetailNews detailId={this.props.params.id} />
      </div>
    )
  }
}

module.exports = DetailNews;
