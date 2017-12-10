import React from 'react';
import axios from 'axios';


class CreateCate extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      description: '',
      msg: '',
    }
  }
  componentDidMount() {
  }
  validate() {
      // neu title = '' => setState msg = "nhap title", return false;
    if (this.state.title === '') {
      this.setState({
        msg: 'bạn chưa nhập  title',
        type: 'title'
      });
      return false;
    } else if (this.state.description === '') {
      this.setState({
        msg: 'bạn chưa nhập description',
        type: 'description'
      });
      return false;
    } else {
        return true;
    }
  }
  createCategory(e) {
    e.preventDefault();
    if (this.validate()) {
      axios({
        method: 'post',
        url: 'http://49.156.53.36:3000/api/categories',
        data: {
          title: this.state.title,
          description: this.state.description
        }
      })
      .then(response => {
        if (this.state.title !== '' && this.state.description !== '') {
          alert("Create Category Success");
          window.location.reload();
          return false
        } else {
            return true;
        }
      })
      .catch(error => {

      })
    }
  }
  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <div className="content-wrapper hg-create">
				<div className="content-header">
			    <h1 className="title-dash">Category
            <small className="small-viet">create</small>
          </h1>
				</div>
				<div className="content-cateadmin create">
          <div className="title-adminbody">
						<h1 className="title-cateAdmin">Create Category</h1>
					</div>
          <p className="msg">
            {
               this.state.msg
              ? <span>{this.state.msg}</span>
              : null
            }
          </p>
					<form onSubmit={this.createCategory.bind(this) }>
            <div className="form-group">
              <label className="title-create">Title</label>
              <input className="text-create pd-create" type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} placeholder="Nhập vào Title"/>
            </div>

            <div className="form-group">
              <label className="title-create">Description</label>
              <input className="text-create pd-create" type="text" name="description" value={this.state.description} onChange={this.onChange.bind(this)} placeholder="Nhập vào Description"/>
            </div>
            <div className="box-pagination">
  						<button className="btn-all btn-create">Create</button>
  					</div>
					</form>
				</div>
      </div>
    )
  }
}

module.exports = CreateCate;
