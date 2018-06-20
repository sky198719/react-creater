import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import less from './index.less';

class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data : [
				{
					"title" : "标题1",
					"info" : "cvxcvxcvxvxvcxcv1",
					"click" : 0,
					"id" : 1
				},
				{
					"title" : "标题2",
					"info" : "cvxcvxcvxvxvcxcv2",
					"click" : 0,
					"id" : 2
				},
				{
					"title" : "标题3",
					"info" : "cvxcvxcvxvxvcxcv3",
					"click" : 0,
					"id" : 3
				},
				{
					"title" : "标题4",
					"info" : "cvxcvxcvxvxvcxcv4",
					"click" : 0,
					"id" : 4
				},
				{
					"title" : "标题5",
					"info" : "cvxcvxcvxvxvcxcv5",
					"click" : 0,
					"id" : 5
				}
			],
			currentId : 0
		}
	}
	handleClick(e){
		this.setState({
			currentId : e.target.getAttribute('value')
		})
	}
	render(){
		const that = this
		let dataArray = []
		this.state.data.forEach(function(item,index){
			item.click = that.state.currentId == item.id ? item.click + 1 : item.click
			dataArray.push(<li key={index}><h2>{item.title}</h2><p>{item.info}</p><span onClick={(e) => that.handleClick(e)} value={item.id}>点击次数：<em onClick={(e) => that.handleClick(e)} value={item.id}>{item.click}</em></span></li>)
		})
		return(
			<div className="list" id="mainCon" value="2">
				<ul>
					{dataArray}
				</ul>
			</div>
		)
	}
}

export default List