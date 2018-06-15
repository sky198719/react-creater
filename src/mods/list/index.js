import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../header/views/index.js';
import Footer from './../footer/views/index.js';
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
		console.log('加载成功')
	}
)