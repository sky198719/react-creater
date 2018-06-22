import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {alertboxAct,alertboxBg} from './../../../js/action/alertbox/index.js';
import less from './index.less';

class Alertbox extends React.Component{
	handleClick(){
		this.props.dispatch(alertboxAct('alertbox'))
	}
	handleHover(){
		this.props.dispatch(alertboxBg('#ff0000'))
	}
	handleLeave(){
		this.props.dispatch(alertboxBg('#eeeeee'))
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
		background : state.alertboxCbg.background
	}
}

export default connect(mapStateToProps)(Alertbox)