import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import Formdetail from './../../formdetail/views';
import './index.less';

class Formfamily extends React.Component{
	render(){
		return(
			<div className="formfamily" id="listCon" value="1">
				<ul>
					<li><label>家庭信息1：</label><input type="text" /><Link replace to="/family/detail/1">查看详情</Link></li>
					<li><label>家庭信息2：</label><input type="text" /><Link replace to="/family/detail/2">查看详情</Link></li>
				</ul>
				<div>
					<Route path="/family/detail/:id" component={Formdetail} />
				</div>
			</div>
		)
	}
}

export default Formfamily