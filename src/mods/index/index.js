import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../header/views/index.js';
import Footer from './../footer/views/index.js';
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
		console.log('加载成功')
	}
)