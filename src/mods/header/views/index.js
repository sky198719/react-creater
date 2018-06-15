import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import less from './index.less';

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data : [
				{
					"title" : "首页",
					"id" : "1",
					"url" : "/index.html"
				},
				{
					"title" : "列表页",
					"id" : "2",
					"url" : "/list.html"
				},
				{
					"title" : "表单页",
					"id" : "3",
					"url" : "/form.html"
				},
			],
			"currentid" : ''
		}
	}
	componentDidMount(){
		this.setState({
			currentid : document.getElementById('mainCon').getAttribute('value')
		})
	}
	handleMouseenter(e){
		e.target.className = e.target.getAttribute('id') == this.state.currentid ? 'current hover' : 'hover'
	}
	handleMouseleave(e){
		e.target.className = e.target.getAttribute('id') == this.state.currentid ? 'current' : ''
	}
	render(){
		const that = this
		let dataArry = []
		let style = ''
		this.state.data.forEach(function(item,index){
			style = that.state.currentid == item.id ? 'current' : ''
			dataArry.push(<li key={index} id={item.id} className={style} onMouseEnter={(e) => that.handleMouseenter(e)} onMouseLeave={(e) => that.handleMouseleave(e)}><a href={item.url}>{item.title}</a></li>)
		})
		return(
			<div>
				<ul className="header">
					{dataArry}
				</ul>
			</div>
		)
	}
}

export default Header