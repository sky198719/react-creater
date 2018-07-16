import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './../../js/store.js';
import Header from './../common/header/views';
import Footer from './../common/footer/views';
import Index from './views/home';

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