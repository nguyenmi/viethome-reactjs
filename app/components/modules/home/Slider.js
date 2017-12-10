import React from 'react';
import axios from 'axios';

class Slider extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			sliderhome: [],
			categoryList: []
		};
	}
	componentDidMount() {
		this.getCategoryList();
		setTimeout(() => {
			this.getSliderHome();
		}, 1000)
	}

	getCategoryList() {
		axios.get('http://49.156.53.36:3000/api/categories')
		.then(response => {
			if (response && response.data) {
				this.setState({
					categoryList: response.data
				})
			}
		})
	}

	getSliderHome() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"where": {"categoryId":"59d8597267b5108650292aeb"}, "limit":5, "order": "startDate DESC"}')
		.then(response => {
			if (response && response.data) {
				let arr = [];
				response.data.map(item => {
					let itemData = Object.assign({}, item);
					let cd = this.state.categoryList.filter(obj => {
						return obj.id === item.categoryId
					});
					itemData.categoryName = cd[0].title
					arr.push(itemData)
				})
				this.setState({
					sliderhome: arr
				}, () => {
				});
			}
		})
		.catch(error => {
		  console.log(error);
		});
	}

	render(){
		let list = this.state.sliderhome && this.state.sliderhome.map((item , index) => {
			return (
				<div className="content-slider" key={item.id}>
					<div className="pd-slider">
						<div className="item-slider" style={{'backgroundImage':`url(${item.image})`}}>
							<a className="txt-link" href={`/#/detailnews/${item.id}`}>
								<img className="img-article" src={item.image} alt="slider1"/>
							</a>
							<div className="pos-slider">

								<h4 className="name-cate fs15">
									<a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a>
								</h4>
								<div className="content-cate fs14 colordate">
									<i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
									<p className="wdate pdr5">{item.startDate}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
		return (
			<div className="slider mgt30">
				{
					list
				}
			</div>
		)
	}
}

module.exports = Slider;
