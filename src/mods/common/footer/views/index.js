import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import less from './index.less'

class Footer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			"copyright" : "xxxxxxxxxxx",
			"aboutus" : [
				{
					"title" : "关于我们"
				},
				{
					"title" : "联系我们"
				},
				{
					"title" : "合作团队"
				},
				{
					"title" : "合作媒体"
				},
				{
					"title" : "作品展示"
				}
			]
		}
	}
	render(){
		const that = this
		let dataArray = []
		let copyright = this.state.copyright
		this.state.aboutus.forEach(function(item,index){
			dataArray.push(<li key={index}>{item.title}</li>)
		})
		return(
			<div className="footer">
				<p>{copyright}</p>
				<ul>
					{dataArray}
				</ul>
			</div>
		)
	}
}

export default Footer