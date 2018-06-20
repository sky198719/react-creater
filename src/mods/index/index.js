import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../common/header/views/index.js';
import Footer from './../common/footer/views/index.js';
import Index from './views/index.js'

ReactDOM.render(
	(
		<div>
			<Header />
			<Index />
			<Footer />
		</div>
	),
	document.getElementById('index'),
	function(){
		console.log('首页加载成功')
	}
)