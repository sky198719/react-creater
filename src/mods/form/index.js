import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import Header from './../common/header/views';
import Footer from './../common/footer/views';
import Formlist from './formlist/views';
import Formfamily from './formfamily/views';
import Formwork from './formwork/views';
import './index.less';

ReactDOM.render(
	(
		<div>
			<Header />
			<div className="list" id="mainCon" value="3">
				<HashRouter>
					<Formlist />
				</HashRouter>
			</div>
			<Footer />
		</div>
	),
	document.getElementById('form'),
	function(){
		console.log('表单页加载成功')
	}
)