import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import less from './index.less'
import pic from './img/pic1.jpg';

class Index extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className="index" id="mainCon" value="1">
				<img src={pic} />
			</div>
		)
	}
}

export default Index