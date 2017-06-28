import { BrowserRouter as Router,Route,Link,Switch,Redirect,PrivateRoute } from 'react-router-dom'
import React from 'react';
import Index from './../pages/index';
import Order from './../pages/order';
import Login from './../pages/login';
import Main from './../pages/main';
import TopNav from './../pages/topNav'
import Customer from './../pages/customer'

const RouterDom = () => (  
  <Router >
    <div>
      	<Route path="/main"  component={Main} />
		<Route path="/order" component={Order} />
		<Route path="/customer"  component={Customer} />
		<Route path="/login" component={Login} />
	</div>
  </Router>
)




export default RouterDom;