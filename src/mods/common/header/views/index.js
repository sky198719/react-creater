import React,{Component} from 'react';
import axios from 'axios';
import {login} from './../../../../js/common.js'
import './index.less';

class Header extends React.Component{
	constructor(){
		super()
		this.state = {
			currentid : '',
			loginState : false,
			headerArry : []
		}
	}
	componentWillMount(){
		this.landingData()
	}
	componentDidMount(){
		this.setState({
			currentid : document.getElementById('mainCon').getAttribute('value')
		})
	}
	getData = () => {
		return axios({
			method : 'get',
			url : '/json/header.json',
		})
		.then((response) => response.data.data.data)
		.catch(function(error){
			console.log(error)
		})
	}
	landingData = () => {
		const that = this
		const logindata = login()
		const headerdata = that.getData()
		let array = []
		let style = ''
		logindata.then(function(res){
			that.setState({
				loginState : res.loginState
			})
			if(res.loginState){
				headerdata.then(function(res){
					res.forEach(function(item,index){
						style = that.state.currentid == item.id ? 'current' : ''
						array.push(<li key={index}><a id={item.id} className={style} href={item.url} onMouseEnter={(e) => that.handleMouseenter(e)} onMouseLeave={(e) => that.handleMouseleave(e)}>{item.title}</a></li>)
					})
					that.setState({
						headerArry : array
					})
				})
			}else{
				array.push(<li key={1}>请先登录</li>)
				that.setState({
					headerArry : array
				})
			}
		})
	}
	handleMouseenter = (e) => {
		console.log('loginState:' + this.state.loginState)
		e.target.className = e.target.getAttribute('id') == this.state.currentid ? 'current hover' : 'hover'
	}
	handleMouseleave = (e) => {
		e.target.className = e.target.getAttribute('id') == this.state.currentid ? 'current' : ''
	}
	render(){
		return(
			<div>
				<ul className="header">
					{this.state.headerArry}
				</ul>
			</div>
		)
	}
}

export default Header