import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {alertboxAct} from './../../../js/action/alertbox/index.js';
import less from './index.less';

class Alertbox extends React.Component{
	handleClick(){
		this.props.dispatch(alertboxAct('alertbox'))
	}
	render(){
		return(
			<div className={this.props.style} onClick={() => this.handleClick()}>{this.props.message}</div>
		)
	}
}

function mapStateToProps(state){
	return{
		style : state.alertboxRe.style
	}
}

export default connect(mapStateToProps)(Alertbox)