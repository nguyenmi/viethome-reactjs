import React from 'react';
import axios from 'axios';
import IndexNews from 'IndexNews';

class NewPage extends React.Component{
  render(){
    return (
      <div>
        <IndexNews/>
      </div>
    )
  }
}
module.exports = NewPage;