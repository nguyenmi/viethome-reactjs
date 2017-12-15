import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import IndexNewUpdate from 'IndexNewUpdate';

class NewUpadate extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      listnewsupdate: []
    };
  }
  componentDidMount() {
    axios.get('http://49.156.53.36:3000/api/posts?filter={"limit" : 6, "order": "startDate DESC"}')
    .then(response => {
  		if (response) {
  			this.setState({
  				listnewsupdate: response.data
  			},() => {
  				setTimeout(() => {
  				}, 500)
  			});
  		}
  	})
  	.catch(error => {
  	  console.log(error);
  	});
  }
  render(){
    return (
      this.state.listnewsupdate && this.state.listnewsupdate.length
      ? <IndexNewUpdate data={this.state.listnewsupdate} type="main"/>
      : null
    )
  }
}

NewUpadate.propTypes = {
  data: PropTypes.object
}
module.exports = NewUpadate;
