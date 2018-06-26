import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {login} from './../../../../js/common.js';
import less from './index.less';

class Footer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			copyright : '',
			footArray : []
		}
	}
	componentWillMount(){
		const that = this
		const footdata = that.getFooterdata()
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
	getFooterdata = () => {
		return axios({
			method : 'get',
			url : '/json/footer.json'
		})
		.then((response) => response.data.data.data)
		.catch(function(error){
			console.log(error)
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