import React,{Component} from 'react';
import axios from 'axios';
import './index.less';

class Formdetail extends React.Component{
	constructor(){
		super()
		this.state = {
			id : '',
			name : ''
		}
	}
	componentWillMount(){
		this.datalanding(this.props.match.params.id)
	}
	componentWillReceiveProps(){
		this.datalanding(this.props.match.params.id)
	}
	datalanding = (id) => {
		const that = this
		let landingdata = this.dataInit(id)
		landingdata.then(function(data){
			that.setState({
				id : data.data.data.id,
				name : data.data.data.name
			})
		})
	}
	dataInit = (id) => {
		return axios({
			method : 'get',
			url : '/json/user' + id + '.json'
		}).then((res) => res.data).catch(function(err){
			console.log(err)
		})
	}
	render(){
		return(
			<Formdetailitem id={this.state.id} name={this.state.name} />
		)
	}
}

class Formdetailitem extends React.Component{
	render(){
		return(
			<div>
				<span>id:{this.props.id}</span><br/><span>name:{this.props.name}</span>
			</div>
		)
	}
}

export default Formdetail