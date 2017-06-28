import React from 'react';
import { Layout,Select,Input,Button,Icon } from 'element-react'
import TopNav from './../pages/topNav'

class Customer extends React.Component {

	render(){

		return(
			<Layout.Row className="page-customer">
				<TopNav />
				客户页面........
			</Layout.Row>
		)
	}
}


export default Customer;