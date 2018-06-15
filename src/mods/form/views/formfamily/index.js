import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import less from './index.less';

class Formfamily extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className="formfamily">
				<label>家庭信息：</label><input type="text" />
			</div>
		)
	}
}

export default Formfamily