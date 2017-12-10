import React from 'react';
import axios from 'axios';
import Pagination from 'Pagination';

function searchingForch(term){
  return function(x){
    return x.title || !term;
  }
  // .toLowerCase().includes(term.toLowerCase())
}
class listcate extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      listcate: [],
      pageOfCategory: [],
      term:'',
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event){
    this.setState({term: event.target.value})
  }
  onChangePage(pageOfCategory) {
    // update state with new page of items
    this.setState({ pageOfCategory: pageOfCategory });
  }
  componentDidMount() {
    this.getListCate();
  }
  getListCate (){
    axios.get('http://49.156.53.36:3000/api/categories')
    .then(response => {
      if (response) {
        this.setState({
            listcate: response.data
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
  deleteCate(id) {
    var deletecate = confirm ("Are you sure you want to delete this item");
    if( deletecate === true) {
      axios({
        method: 'DELETE',
        url: `http://49.156.53.36:3000/api/categories/${id}`,
      }).then(response => {
        this.removeItemClient(id);
      }).catch(error => {
      })
    }else {
    }
  }
  removeItemClient(id) {
    var newItems = this.state.pageOfCategory.filter((item) => {
      return item.id != id;
    });
    this.setState({ pageOfCategory: newItems });
  }
  render(){
    let ListAllCate = this.state.pageOfCategory && this.state.pageOfCategory.filter(searchingForch(this.state.term)).map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <button  className="btn-edit" type="button" name="button">
              <a className="link-edit" href={`/#/admin/editcategory/${item.id}`}>Edit</a>
            </button>
            <button onClick={this.deleteCate.bind(this, item.id)}  className="btn-delete" type="button" name="button">Delete</button>
          </td>
        </tr>
      )
    })
    return (
      <div className="content-wrapper">
				<div className="content-header">
			    <h1 className="title-dash">Category Table
            <small className="small-viet">preview of Category tables</small>
          </h1>
				</div>
				<div className="content-cateadmin">
          <div className="content-boxheader">
            <div className="box-create">
              <div className="btn-all">
                <a href="#/admin/createcategory" className="link-admin">Create Category</a>
              </div>
            </div>
            <div className="box-search">
              <form className="search-body">
                  <input type="text" name="table_search" onChange={this.searchHandler.bind(this)} value={this.state.term} className="form-control text-search" placeholder="Search"/>
                  <div className="input-group-btn">
                      <button type="submit" className="btn btn-default">
                        <i className="fa fa-search icon-search"></i>
                      </button>
                  </div>
              </form>
            </div>
					</div>
					<table className="table-admin">
            <tbody>
  					  <tr>
  					    <th>Id</th>
  					    <th>Title</th>
  					    <th>Description</th>
                <th>Action</th>
  					  </tr>
              {ListAllCate}
            </tbody>
					</table>
          <div className="box-footer clearfix">
              <ul className="pagination pagination-sm no-margin pull-right">
                  <Pagination items={this.state.listcate} onChangePage={this.onChangePage} />
              </ul>
          </div>
				</div>
      </div>
    )
  }
}

module.exports = listcate;
