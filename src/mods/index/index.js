import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './../../js/store/index.js';
import Header from './../common/header/views/index.js';
import Footer from './../common/footer/views/index.js';
import Index from './views/home/index.js';

const store = configureStore()

ReactDOM.render(
	(
		<Provider store={store}>
			<div>
				<Header />
				<Index />
				<Footer />
			</div>
		</Provider>
	),
	document.getElementById('index'),
	function(){
		console.log('首页加载成功')
	}
)