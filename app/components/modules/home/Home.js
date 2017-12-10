import React from 'react';
import axios from 'axios';
import Title from 'Title';
import Slider from 'Slider';
import ContentHome from 'ContentHome';

class Home extends React.Component{
  render(){
    return (
      <div>
        <Title/>
        <Slider/>
        <ContentHome/>
      </div>
    )
  }
}
module.exports = Home;
