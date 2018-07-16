import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.less';

class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			articleid : 0,
			listArray : []
		}
	}
	componentWillMount(){
		this.landingData('json/list.json')
	}
	getData = (url) => {
		return axios({
			method : 'get',
			url : url,
		})
		.then((response) => response.data.data.data)
		.catch(function(error){
			console.log(error)
		})
	}
	landingData = (url) => {
		const that = this
		const listdata = this.getData(url)
		let array = []
		listdata.then(function(res){
			res.forEach(function(item,index){
				array.push(<li key={index} onClick={(e) => that.handleClick(e)} onMouseEnter={(e) => that.handleMouseover(e)} onMouseLeave={(e) => that.handleMouseout(e)}><h2>{item.title}</h2><p>{item.info}</p><span>点击次数：<em value={item.id}>{item.click}</em></span></li>)
			})
			that.setState({
				listArray : array
			})
		})
	}
	handleMouseover = (e) => {
		e.currentTarget.className = 'current'
	}
	handleMouseout = (e) => {
		e.currentTarget.className = ''
	}
	handleClick = (e) => {
		console.log(e.target.innerHTML)
	}
	render(){
		return(
			<div className="list" id="mainCon" value="2">
				<ul>
					{this.state.listArray}
				</ul>
				<button onClick={() => this.landingData('json/list2.json')}>更新</button>
			</div>
		)
	}
}

export default List