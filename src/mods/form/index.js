import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom'
import Header from './../common/header/views';
import Footer from './../common/footer/views';
import Formlist from './views/formlist';
import Formfamily from './views/formfamily';
import Formwork from './views/formwork';

ReactDOM.render(
	(
		<div>
			<Header />
			<div className="list" id="mainCon" value="3">
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
		console.log('表单页加载成功')
	}
)