import React from 'react';
import axios from 'axios';
import Pagination from 'Pagination';

class SearchCate extends React.Component{

  filterUpdate() {
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }
    render(){

      console.log('filterText value' , this.props.filterText)

        return (
          <div className="box-header">
              <a href="#/admin/createcategory" className="btn btn-sm btn-info btn-flat pull-left">Create Category</a>
              <div className="box-tools wd-search">
                  <form className="input-group input-group-sm" >
                      <input type="text"
                      ref={(value) => {this.myValue = value} }
                      onChange={this.filterUpdate.bind(this)}
                       name="table_search" className="form-control pull-right" placeholder="Search"/>
                      <div className="input-group-btn">
                          <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                      </div>
                  </form>
              </div>
          </div>
        )
    }
}

module.exports = SearchCate;
