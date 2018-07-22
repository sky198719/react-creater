import React,{Component} from 'react';
import axios from 'axios';
import './index.less';

class List extends React.Component{
	constructor(){
		super()
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
				array.push(<Listitem key={index} title={item.title} info={item.info} handleclick={(e) => that.handleClick(e)} handlemouseover={(e) => that.handleMouseover(e)} handlemouseout={(e) => that.handleMouseout(e)} />)	
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

class Listitem extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<li onClick={this.props.handleclick} onMouseEnter={this.props.handlemouseover} onMouseLeave={this.props.handlemouseout}><h2>{this.props.title}</h2><p>{this.props.info}</p></li>
		)
	}
}

export default List