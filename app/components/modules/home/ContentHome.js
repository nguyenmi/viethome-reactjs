import React from 'react';
import axios from 'axios';
import News from 'News';
import NewUpdate from 'NewUpdate';
import Video from 'Video';
import Article from 'Article';
import SeemoreVideo from 'SeemoreVideo';
import MenuHome from 'MenuHome';
import Advertisement from 'Advertisement';
import PropTypes from 'prop-types';

class ContentHome extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			newsList: [],
			life : [],
			technology: [],
			business: [],
			sport: [],
			showbiz: [],
		};
	}
	getNewsList() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc615667b5108650292af9"}, "limit":1, "order": "startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					newsList: response.data
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
	getLife() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc612f67b5108650292af7"}, "limit":1, "order": "startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					life: response.data
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
	getTechnology() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc610b67b5108650292af6"}, "limit":1, "order": "startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					technology: response.data
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
	getBusiness() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc61c467b5108650292afa"}, "limit":1, "order": "startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					business: response.data
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
	getSport() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59dc614667b5108650292af8"}, "limit":1, "order": "startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					sport: response.data
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
	getShowbiz(){
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"5a33579c67b5108650292ba2"}, "limit":1, "order": "startDate DESC"}')
		.then(response => {
			if (response) {
				this.setState({
					showbiz: response.data
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
	componentDidMount() {
		this.getNewsList();
		this.getLife();
		this.getTechnology();
		this.getBusiness();
		this.getSport();
		this.getShowbiz();
	}
	render(){
    return (
	    <div className="main-content mgt30">
				<div className="left-main">
					<Article/>
					<div className="content-category mgt30">
						<div className="left">
							<News type="color-red" title="Tin Tức" data={this.state.newsList} />
							<News type="color-sky" title="Đời Sống" data={this.state.life}/>
							<News type="color-brick" title="Công Nghệ" data={this.state.technology}/>
						</div>
						<div className="right">
							<News type="color-blue" title="Kinh Doanh" data={this.state.business}/>
							<News type="color-green" title="Thể Thao" data={this.state.sport}/>
							<News type="color-blued" title="Giải Trí" data={this.state.showbiz}/>
						</div>
					</div>
					<div className="content-video ">
						<Video/>
						<SeemoreVideo/>
					</div>
				</div>
				<div className="right-main">
					<MenuHome/>
					<Advertisement/>
					<div className="news-update">
						<div className="adver-new fs13 fontW fontU">
							<h3>Mới cập nhật</h3>
						</div>
						<NewUpdate/>
					</div>
				</div>
			</div>
    )
  }
}
ContentHome.propTypes = {
  data: PropTypes.object
}
module.exports = ContentHome;
