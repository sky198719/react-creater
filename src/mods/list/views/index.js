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
					"click" : 0
				},
				{
					"title" : "标题2",
					"info" : "cvxcvxcvxvxvcxcv2",
					"click" : 0
				},
				{
					"title" : "标题3",
					"info" : "cvxcvxcvxvxvcxcv3",
					"click" : 0
				},
				{
					"title" : "标题4",
					"info" : "cvxcvxcvxvxvcxcv4",
					"click" : 0
				},
				{
					"title" : "标题5",
					"info" : "cvxcvxcvxvxvcxcv5",
					"click" : 0
				}
			]
		}
	}
	render(){
		const that = this
		let dataArray = []
		this.state.data.forEach(function(item,index){
			dataArray.push(<li key={index}><h2>{item.title}</h2><p>{item.info}</p><span>点击次数：<em>{item.click}</em></span></li>)
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