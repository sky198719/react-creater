import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {alertboxAct} from './../../../../js/action/alertbox/index.js';
import less from './index.less'
import pic from './img/pic1.jpg';
import Alertbox from './../../../../mui/alertbox/views/index.js';

class Index extends React.Component{
	handleClick(){
		this.props.dispatch(alertboxAct('alertbox current'))
	}
	render(){
		return(
			<div>
				<div className="index" id="mainCon" value="1">
					<img src={pic} onClick={() => this.handleClick()} />
					<Alertbox message="小明你好" />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		style : state.alertboxRe.style
	}
}

export default connect(mapStateToProps)(Index)