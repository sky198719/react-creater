import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less';

class Formfamily extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className="formfamily" id="listCon" value="1">
				<label>家庭信息：</label><input type="text" />
			</div>
		)
	}
}

export default Formfamily