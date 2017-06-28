import React from 'react';
import { Layout,Select,Input,Button,Icon,Menu } from 'element-react'
import { BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import './../styles/topNav.scss';


class TopNav extends React.Component {

	render(){

		return(
			<Layout.Row className="pg-topNav">
				<Layout.Col span="2">LOGIN图片</Layout.Col>

				<Layout.Col span="2"><NavLink to="/main" activeClassName="selected"><div className="nav-item">工作台</div></NavLink></Layout.Col>
				<Layout.Col span="2"><NavLink to="/order" activeClassName="selected"><div className="nav-item">订单</div></NavLink></Layout.Col>
				<Layout.Col span="2"><NavLink to="/customer" activeClassName="selected"><div className="nav-item">客户</div></NavLink></Layout.Col>
				<Layout.Col span="2"><div className="nav-item">产品<Icon name="caret-bottom"/></div></Layout.Col>
				<Layout.Col span="2"><div className="nav-item">报表</div></Layout.Col>
				<Layout.Col span="2"><div className="nav-item system">系统<Icon name="caret-bottom"/></div></Layout.Col>

				<Layout.Col span="10">
					<Layout.Row type="flex" justify="end">
						<Layout.Col span="14">&nbsp;</Layout.Col>
						<Layout.Col span="2"><span className="nav-username">ken</span></Layout.Col>
						<Layout.Col span="2"><i className="nav-icon fa fa-user-circle-o"></i></Layout.Col>
						<Layout.Col span="2"><i className="nav-icon fa fa-unlock-alt"></i></Layout.Col>
						<Layout.Col span="2"><i className="nav-icon fa fa-question-circle-o"></i></Layout.Col>
						<Layout.Col span="2"><i className="nav-icon fa fa-power-off"></i></Layout.Col>
					</Layout.Row>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default TopNav;