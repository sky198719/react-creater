import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import less from './index.less';

class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			articleid : 0,
			listArray : []
		}
	}
	componentWillMount(){
		const that = this
		const listdata = that.getListdata()
		let array = []
		listdata.then(function(res){
			res.forEach(function(item,index){
				array.push(<li key={index}><h2>{item.title}</h2><p>{item.info}</p><span>点击次数：<em value={item.id} onClick={(e) => that.handleClick(e)}>{item.click}</em></span></li>)
			})
			that.setState({
				listArray : array
			})
		})
	}
	getListdata = () => {
		return axios({
			method : 'get',
			url : '/json/list.json',
		})
		.then((response) => response.data.data.data)
		.catch(function(error){
			console.log(error)
		})
	}
	handleClick = (e) => {
		console.log(e.target.getAttribute('value'))
	}
	render(){
		return(
			<div className="list" id="mainCon" value="2">
				<ul>
					{this.state.listArray}
				</ul>
			</div>
		)
	}
}

export default List