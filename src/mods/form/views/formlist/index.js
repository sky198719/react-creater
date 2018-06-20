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
			],
			currentId : ''
		}
	}
	componentDidMount(){
		this.setState({
			currentId : document.getElementById('listCon').getAttribute('value')
		})
	}
	handleMouseenter(e){
		e.target.className = e.target.getAttribute('id') == this.state.currentId ? 'current hover' : 'hover'
	}
	handleMouseleave(e){
		e.target.className = e.target.getAttribute('id') == this.state.currentId ? 'current' : ''
	}
	handleClick(e){
		this.setState({
			currentId : e.target.getAttribute('id')
		})
	}
	render(){
		const that = this
		let dataArray = []
		let style = ''
		this.state.data.forEach(function(item,index){
			style = that.state.currentId == item.id ? 'current' : ''
			dataArray.push(<li key={index}><Link id={item.id} className={style} to={item.url} replace onClick={(e) => that.handleClick(e)} onMouseEnter={(e) => that.handleMouseenter(e)} onMouseLeave={(e) => that.handleMouseleave(e)}>{item.title}</Link></li>)
		})
		return(
			<div>
				<ul className="formlist">
					{dataArray}
				</ul>
				{this.props.children}
			</div>
		)
	}
}

export default Formlist