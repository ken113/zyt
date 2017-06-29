import { BrowserRouter as Router,Route,Link,Switch,Redirect,PrivateRoute } from 'react-router-dom'
import React from 'react';
import Index from './../pages/index';
import Order from './../pages/order';
import Login from './../pages/login';
import Main from './../pages/main';
import TopNav from './../pages/topNav'
import Customer from './../pages/customer'
import Company from './../pages/system/company'

const RouterDom = () => (  
  <Router >
    <div>
    	<Route exact path="/"  component={Main} />
    	<Route path="/login" component={Login} />
      	<Route path="/main"  component={Main} />
		<Route path="/order" component={Order} />
		<Route path="/customer"  component={Customer} />
		<Route path="/company"  component={Company} />
	</div>
  </Router>
)




export default RouterDom;