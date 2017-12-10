import React from 'react';
import axios from 'axios';

class IndexPost extends React.Component{
    constructor(props, context) {
        super(props, context);
            this.state ={
                postadmin: []
            };
        }
	componentDidMount() {
		this.getListPostofAdmin();
	}
    getListPostofAdmin (){
        axios.get('http://49.156.53.36:3000/api/posts?filter={"limit":5}')
        .then(response => {
          if (response) {
            this.setState({
                postadmin: response.data
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
    let ListCateofIndex = this.state.postadmin && this.state.postadmin.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </tr>
      )
    })
    return (
      <div className="content-cateadmin">
        <div className="title-adminbody">
          <h1 className="title-cateAdmin">Post</h1>
        </div>
        <table className="table-admin">
          <tbody>
            <tr>
              <th>Id</th>
              <th>title</th>
              <th>Description</th>
            </tr>
            {ListCateofIndex}
          </tbody>
        </table>
        <div className="content-boxfooter">
          <div className="btn-all">
            <a href="#/admin/post" className="link-admin">View All Post</a>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = IndexPost;
