import React from 'react';
import axios from 'axios';
import IndexVideo from 'IndexVideo';
import MenuVideo from 'MenuVideo';

class VideoPage  extends React.Component{
  render(){
    return (
      <div>
        <MenuVideo/>
        <IndexVideo/>
      </div>
    )
  }
}

module.exports = VideoPage;
