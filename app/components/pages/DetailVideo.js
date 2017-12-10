import React from 'react';
import axios from 'axios';
import MenuVideo from 'MenuVideo';
import IndexDetailVideos from 'IndexDetailVideos';
import ListDetailVideos from 'ListDetailVideos';

class DetailVideo extends React.Component{
  render(){
    return (
      <div>
        <MenuVideo/>
        <div className="pagevideo-content">
          <div className="container-detailvideo">
            <IndexDetailVideos detailId={this.props.params.id}/>
            <div className="right-detailvideo">
              <ListDetailVideos/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = DetailVideo;
