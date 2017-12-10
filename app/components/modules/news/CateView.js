import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class CateView extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      hotview: [],
      categoryList: []
    }
  }
  componentDidMount() {
    this.getCategoryList();
		// setTimeout(() => {
		// 	this.getHotView();
		// }, 1000)
  }
  getCategoryList() {
		axios.get('http://49.156.53.36:3000/api/categories')
		.then(response => {
			if (response && response.data) {
				this.setState({
					categoryList: response.data
				},() => {
          this.getHotView();
        })
			}
		})
	}
  getHotView() {
		axios.get('http://49.156.53.36:3000/api/posts?filter={"limit":6 , "order": "view DESC"}')
		.then(response => {
			if (response && response.data) {
				let arr = [];
				response.data.map(item => {
					let itemData = Object.assign({}, item);
					let cd = this.state.categoryList.filter(obj => {
						return obj.id === item.categoryId
					});
          if (cd && cd.length > 0) {
            itemData.categoryName = cd[0].title
            arr.push(itemData)
          }
				})
				this.setState({
					hotview: arr
				}, () => {
				});
			}
		})
		.catch(error => {
		  console.log(error);
		});
	}
  render(){
    let listhotview = this.state.hotview && this.state.hotview.map(item=> {
      return (
        <div className="content-view" key={item.id}>
            <div className="item-view" style={{ 'backgroundImage':`url(${item.image})`}}>
                <a href={`/#/detailnews/${item.id}`}><img className="img-article" src={item.image} /></a>
                <div className="cate-title">
                    <p className="cate-view-news">
                        <a className="colorW"  href="#">{item.categoryName}</a>
                    </p>
                    <h4 className="title-view">
                        <a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a>
                    </h4>
                    <div className="colordate">
                        <i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
                        <p className="pdr5 wdate">{item.startDate}</p>
                    </div>
                </div>
            </div>
        </div>
      )
    })
    return (
      <div>
        {listhotview}
      </div>
    )
  }
}

CateView.propTypes = {
  data: PropTypes.array
}
module.exports = CateView;
