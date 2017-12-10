import React from 'react';
import axios from 'axios';

class SliderNews extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			details: []
		};
	}
	componentDidMount() {
		this.getDetails();
	}

	getDetails() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59d8597267b5108650292aeb"}}')
		.then(response => {
		  if (response) {
			  this.setState({
				  details: response.data
			  }, () => {
				setTimeout(() => {
					$(".slider-one").slick({
						prevArrow: '.slider-next .left',
						nextArrow: '.slider-next .right',
						slidesToShow: 4,
						slidesToScroll: 1,
					});
				}, 500)
			  });
		  }
		})
		.catch(error => {
		  console.log(error);
		});
	}

	render(){
		let list = this.state.details && this.state.details.map(item => {
			return (
				<div className="slinew-content" key={item.id}>
					<div className="item-news" style={{'backgroundImage':`url(${item.image})`}}>
						<a href={`/#/detailnews/${item.id}`}>
							<img className="img-article" src={item.image}/>
						</a>
						<div className="pos-slinew">
							<p><a className="colorW fontW" href={`/#/detailnews/${item.id}`}>{item.title}</a></p>
							<div className="content fs14 colordate">
								<i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
								<p className="wdate pdr5">{item.startDate}</p>
							</div>
						</div>
					</div>
				</div>
			)
		})
		return (
			<div className="slider-new">
				<div className="slick-slider slider-one">
					{
						list
					}
				</div>
				<div className="slider-next">
					<div className="content-next">
						<p className="text-slider">Bài viết tiếp theo</p>
						<i className="fa fa-chevron-left left" aria-hidden="true"></i>
						<i className="fa fa-chevron-right right" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = SliderNews;
