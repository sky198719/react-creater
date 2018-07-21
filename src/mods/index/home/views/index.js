import React,{Component} from 'react';
import {connect} from 'react-redux';
import {login} from './../../../../js/common.js'
import {alertboxAct} from './../../../../mui/alertbox/action';
import './index.less'
import pic from './img/pic1.jpg';
import Alertbox from './../../../../mui/alertbox/views';

class Index extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			loginState : false
		}
	}
	componentWillMount(){
		const that = this
		const logindata = login()
		logindata.then(function(res){
			that.setState({
				loginState : res.loginState
			})
		})
	}
	handleClick = () => {
		if(this.state.loginState){
			this.props.dispatch(alertboxAct('alertbox current'))
		}else{
			alert('你还没登录没资格当码农')
		}	
	}
	render(){
		return(
			<div>
				<div className="index" id="mainCon" value="1">
					<img src={pic} onClick={() => this.handleClick()} />
					<Alertbox />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		classname : state.alertboxRe.classname
	}
}

export default connect(mapStateToProps)(Index)