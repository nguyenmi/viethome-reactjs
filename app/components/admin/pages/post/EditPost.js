import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class EditCate extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state ={
      title: '',
      image: '',
      startDate: '',
      body: '',
      view: '',
      categories: '',
      categoryId: '',
      msg: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
	componentDidMount() {
    this.getEditPost();
	}
  getCategoryOfPost() {
		axios.get('http://49.156.53.36:3000/api/categories')
		.then(response => {
			if (response && response.data) {
				this.setState({
					categories: response.data
				})
			}
		})
	}
  getEditPost (){
    axios.get('http://49.156.53.36:3000/api/posts/'+this.props.params.id)
    .then(response => {
      if (response) {
        this.setState({
            title: response.data.title,
            image: response.data.image,
            body: response.data.body,
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
  updatePost(e) {
    e.preventDefault();
    axios({
      method: 'patch',
      url: 'http://49.156.53.36:3000/api/posts/'+this.props.params.id,
      data: {
        title: this.state.title,
        image: this.state.image,
        body: this.state.body
      }
    })
    .then(response => {
      if (this.state.title !== '' && this.state.description !== '') {
        alert("Edit Post Success");
        window.location="#/admin/post";
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
			    <h1 className="title-dash">Post
            <small className="small-viet">Edit</small>
          </h1>
				</div>
				<div className="content-cateadmin edit ">
          <div className="title-adminbody">
						<h1 className="title-cateAdmin">Edit Post</h1>
					</div>
          <p className="msg">
            {
               this.state.msg
              ? <span>{this.state.msg}</span>
              : null
            }
          </p>
					<form onSubmit={this.updatePost.bind(this) }>
            <div className="form-group">
              <label className="title-edit">Title :</label>
              <input className="text-create pd-create" type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} placeholder="Nhập vào Title"/>
            </div>
            <div className="form-group">
              <label className="title-edit">Image :</label>
              <input className="text-create pd-create" type="text" name="image" value={this.state.image} onChange={this.onChange.bind(this)} placeholder="Nhập vào link Image"/>
            </div>
            <div className="form-group">
              <label className="title-edit">Body :</label>
              <textarea className="text-body pd-create" name="body" rows="10" cols="80" placeholder="Nhập vào nội dung bài viết" value={this.state.body} onChange={this.onChange.bind(this)}></textarea>
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
