import React from 'react';
import axios from 'axios';

class IndexCate extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
        cateadmin: []
    };
  }
	componentDidMount() {
		this.getListCateOfAdmin();
	}
  getListCateOfAdmin (){
    axios.get('http://49.156.53.36:3000/api/categories?filter={"limit":5}')
    .then(response => {
      if (response) {
        this.setState({
            cateadmin: response.data
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
    let ListCateofIndex = this.state.cateadmin && this.state.cateadmin.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.description}</td>
        </tr>
      )
    })
    return (
      <div className="content-cateadmin">
        <div className="title-adminbody">
          <h1 className="title-cateAdmin">Category</h1>
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
            <a href="#/admin/category" className="link-admin">View All Category</a>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = IndexCate;
