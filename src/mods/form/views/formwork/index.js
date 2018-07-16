import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less';

class Formwork extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className="formwork" id="listCon" value="2">
				<label>工作信息：</label><input type="text" />
			</div>
		)
	}
}

export default Formwork