import React,{Component} from 'react';
import './index.less';

class Formfamily extends React.Component{
	render(){
		return(
			<div className="formfamily" id="listCon" value="1">
				<label>家庭信息：</label><input type="text" />
			</div>
		)
	}
}

export default Formfamily