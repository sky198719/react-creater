import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../common/header/views/index.js';
import Footer from './../common/footer/views/index.js';
import List from './views/index.js'

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