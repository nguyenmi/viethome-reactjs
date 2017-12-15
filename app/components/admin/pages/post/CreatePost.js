import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreatePost extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      image: '',
      startDate: '',
      body: '',
      view: '',
      categories: '',
      categoryId: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  componentDidMount() {
		this.getCategoryOfPost();
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
  validate() {
    if (this.state.title === '') {
      this.setState({
        msg: 'bạn chưa nhập  title',
        type: 'title'
      });
      return false;
    }else if (this.state.image === '') {
      this.setState({
        msg: 'bạn chưa nhập Image',
        type: 'Image'
      });
      return false;
    }
    else if (this.state.categoryId === '') {
      this.setState({
        msg: 'bạn chưa chọn Category',
        type: 'Category'
      });
      return false;
    }
    else if (this.state.startDate === '') {
      this.setState({
        msg: 'bạn chưa nhập Date',
        type: 'Date'
      });
      return false;
    }
    else if (this.state.body === '') {
      this.setState({
        msg: 'bạn chưa nhập body',
        type: 'body'
      });
      return false;
    }
   else {
      return true;
    }
  }
  createPost(e, view) {
    e.preventDefault();
    let number = view ? view : 0;
    if (this.validate()) {
      axios({
        method: 'post',
        url: 'http://49.156.53.36:3000/api/posts',
        data: {
          title: this.state.title,
          image: this.state.image,
          startDate: this.state.startDate,
          view: parseInt(number),
          body: this.state.body,
          categoryId: this.state.categoryId
        }
      }).then(response => {
        alert("Create Post Success");
        window.location.reload();
      }).catch(error => {

      })
    }
  }
  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    }, () => {
        console.log(this.state.categoryId);
    });
  }
  render(){
    return (
      <div className="content-wrapper hg-create">
				<div className="content-header">
			    <h1 className="title-dash">Post
            <small className="small-viet">create</small>
          </h1>
				</div>
				<div className="content-cateadmin edit ">
          <div className="title-adminbody">
						<h1 className="title-cateAdmin">Create Post</h1>
					</div>
          <p className="msg">
            {
               this.state.msg
              ? <span>{this.state.msg}</span>
              : null
            }
          </p>
					<form onSubmit={this.createPost.bind(this) }>
            <div className="form-group">
              <label className="title-edit">Title :</label>
              <input className="text-create pd-create" type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} placeholder="Nhập vào Title"/>
            </div>
            <div className="form-group">
              <label className="title-edit">Image :</label>
              <input className="text-create pd-create" type="text" name="image" value={this.state.image} onChange={this.onChange.bind(this)} placeholder="Nhập vào link Image"/>
            </div>
            <div className="form-group">
              <label className="title-edit">Category :</label>
              <div className="group-text">
                <div className="cate-group">
                  <select className="text-select" name="categoryId" onChange={this.onChange.bind(this)} >
                    <option>Select Category Name</option>
                    {
                      this.state.categories && this.state.categories.map(item => {
                        return (
                          <option key={item.id}  value={item.id} >{item.title}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="date-group">
                  <label className="stdate">Date :</label>
                  <DatePicker name="startDate" className="text-create rp-date" selected={this.state.startDate} value={this.state.startDate} onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="title-edit">Body :</label>
              <textarea className="text-body pd-create " name="body" rows="10" cols="80" placeholder="Nhập vào nội dung bài viết" value={this.state.body} onChange={this.onChange.bind(this)}></textarea>
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

module.exports = CreatePost;
