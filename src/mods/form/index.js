import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom'
import Header from './../header/views/index.js';
import Footer from './../footer/views/index.js';
import Formlist from './views/formlist/index.js';
import Formfamily from './views/formfamily/index.js';
import Formwork from './views/formwork/index.js';

ReactDOM.render(
	(
		<div>
			<Header />
			<div id="mainCon" value="3">
				<HashRouter>
					<Formlist>
						<Route exact path="/" component={Formfamily} />
						<Route path="/family" component={Formfamily} />
						<Route path="/work" component={Formwork} />
					</Formlist>
				</HashRouter>
			</div>
			<Footer />
		</div>
	),
	document.getElementById('form'),
	function(){
		console.log('加载成功')
	}
)