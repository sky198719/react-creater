import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../common/header/views';
import Footer from './../common/footer/views';
import List from './list/views';
import './index.less';

ReactDOM.render(
	(
		<div>
			<Header />
			<List />
			<Footer />
		</div>
	),
	document.getElementById('list'),
	function(){
		console.log('列表页加载成功')
	}
)