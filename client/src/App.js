import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Resister';
import Login from './components/auth/Login';

import './App.css';

function App() {
	return (
		<provider store={store}>
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Landing} />
					<div className="container">
						<Route exact path="/register" component={Register} />
					</div>
					<div className="container">
						<Route exact path="/login" component={Login} />
					</div>
					<Footer />
				</div>
			</Router>
		</provider>
	);
}

export default App;
