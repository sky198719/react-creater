import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {alertboxAct,alertboxBg,alertboxMsg,alertboxInfo,alertboxFromre} from './../../../js/action/alertbox/index.js';
import less from './index.less';

class Alertbox extends React.Component{
	componentDidMount(){
		this.props.dispatch(alertboxAct('alertbox'))
		this.props.dispatch(alertboxMsg('我是码农吗'))
	}
	handleClick = () => {
		this.props.dispatch(alertboxAct('alertbox'))
	}
	handleHover = () => {
		this.props.dispatch(alertboxBg('#ff0000'))
		this.props.dispatch(alertboxFromre())
	}
	handleLeave = () => {
		this.props.dispatch(alertboxBg('#eeeeee'))
		this.props.dispatch(alertboxInfo())
	}
	render(){
		return(
			<div className={this.props.classname} style={{background:this.props.background}} onClick={() => this.handleClick()} onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleLeave()}>{this.props.message}</div>
		)
	}
}

function mapStateToProps(state){
	return{
		classname : state.alertboxRe.classname,
		background : state.alertboxCbg.background,
		message : state.alertboxCmsg.message
	}
}

export default connect(mapStateToProps)(Alertbox)