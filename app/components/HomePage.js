import React from 'react';
import axios from 'axios';

class HomePage extends React.Component{
  handleRequest(){
    // axios.get('/try')
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
    axios.post('/axios', {username: 'KHOAPHAM'})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  render(){
    return (
      <div>
        <p> Content Index </p>
      </div>
    )
  }
}

module.exports = HomePage;
