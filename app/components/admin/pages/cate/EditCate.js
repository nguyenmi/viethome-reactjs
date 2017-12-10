import React from 'react';
import axios from 'axios';

class EditCate extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      title: '',
      images: '',
      startDate: '',
      body: '',
      view: '',
      categories: '',
      categoryId: ''
    };
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
	componentDidMount() {
    this.getEditCate();
    // this.updateCate();
	}
  getEditCate (){
    axios.get('http://49.156.53.36:3000/api/categories/'+this.props.params.id)
    .then(response => {
      if (response) {
        this.setState({
            title: response.data.title,
            description:response.data.description
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
  updateCate(e) {
    e.preventDefault();
    axios({
      method: 'patch',
      url: 'http://49.156.53.36:3000/api/categories/'+this.props.params.id,
      data: {
        title: this.state.title,
        description: this.state.description
      }
    })
    .then(response => {
      if (this.state.title !== '' && this.state.description !== '') {
        alert("Edit Category Success");
        window.location="#/admin/category";
        return false
      } else {
        return true;
      }
    })
    .catch(error => {
    })
  }
  render(){
    return (
      <div className="content-wrapper hg-create">
				<div className="content-header">
			    <h1 className="title-dash">Category
            <small className="small-viet">Edit</small>
          </h1>
				</div>
				<div className="content-cateadmin create">
          <div className="title-adminbody">
						<h1 className="title-cateAdmin">Create Edit</h1>
					</div>
          <p className="msg">
            {
               this.state.msg
              ? <span>{this.state.msg}</span>
              : null
            }
          </p>
					<form onSubmit={this.updateCate.bind(this) }>
            <div className="form-group">
              <label className="title-create">Title</label>
              <input className="text-create pd-create" type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} placeholder="Nhập vào Title"/>
            </div>

            <div className="form-group">
              <label className="title-create">Description</label>
              <input className="text-create pd-create" type="text" name="description" value={this.state.description} onChange={this.onChange.bind(this)} placeholder="Nhập vào Description"/>
            </div>
            <div className="box-pagination">
  						<button className="btn-all btn-create">Update</button>
  					</div>
					</form>
				</div>
      </div>
    )
  }
}

module.exports = EditCate;
