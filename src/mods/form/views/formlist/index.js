import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import less from './index.less';

class Formlist extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data : [
				{
					"title" : "家庭信息",
					"id" : "1",
					"url" : "/family"
				},
				{
					"title" : "工作信息",
					"id" : "2",
					"url" : "/work"
				}
			]
		}
	}
	render(){
		const that = this
		let dataArray = []
		this.state.data.forEach(function(item,index){
			dataArray.push(<li key={index}><Link to={item.url} replace>{item.title}</Link></li>)
		})
		return(
			<div className="formlist">
				<ul>
					{dataArray}
				</ul>
				{this.props.children}
			</div>
		)
	}
}

export default Formlist