import React,{Component} from 'react';
import './index.less';

class Formwork extends React.Component{
	render(){
		return(
			<div className="formwork" id="listCon" value="2">
				<label>工作信息：</label><input type="text" />
			</div>
		)
	}
}

export default Formwork