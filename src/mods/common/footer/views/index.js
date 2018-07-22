import React,{Component} from 'react';
import axios from 'axios';
import {login} from './../../../../js/common.js';
import './index.less';

class Footer extends React.Component{
	constructor(){
		super()
		this.state = {
			copyright : '',
			footArray : []
		}
	}
	componentWillMount(){
		this.landingData()
	}
	getData = () => {
		return axios({
			method : 'get',
			url : '/json/footer.json'
		})
		.then((response) => response.data.data.data)
		.catch(function(error){
			console.log(error)
		})
	}
	landingData = () => {
		const that = this
		const footdata = that.getData()
		let array = []
		footdata.then(function(res){
			res.aboutus.forEach(function(item,index){
				array.push(<li key={index}>{item.title}</li>)
			})
			that.setState({
				copyright : res.copyright,
				footArray : array
			})
		})
	}
	render(){
		return(
			<div className="footer">
				<p>{this.state.copyright}</p>
				<ul>
					{this.state.footArray}
				</ul>
			</div>
		)
	}
}

export default Footer