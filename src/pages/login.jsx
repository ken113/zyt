import React from 'react';
import { Link } from 'react-router-dom';
import { Layout,Select,Input,Button,Icon } from 'element-react'

import './../styles/login.scss';

class Login extends React.Component {

	render(){

		return(
			<Layout.Row className="pg-login">
				<div className="login-title">
					<i>LOGO图片</i>
					<span className="csname">XXXX订单管理平台</span>
				</div>
				<Layout.Row type="flex" className="login-center" justify="end">
					<div className="login-box">
						<Layout.Row type="flex" className="lang" justify="end">
							<Select value='zh'>
								<Select.Option label='中文' value='zh' />
								<Select.Option label='英文' value='en' />
							</Select>
						</Layout.Row>
						<div className="login-form">
							<Layout.Row className="col">
								<Layout.Col span="4" className="col-label"><label>&nbsp;</label></Layout.Col>
								<Layout.Col span="20" className="error-tips"><Icon name="information"></Icon><span>请输入用户名和密码</span></Layout.Col>
							</Layout.Row>
							<Layout.Row className="col">
								<Layout.Col span="4" className="col-label"><i className="icon-user fa fa-user"></i></Layout.Col>
								<Layout.Col span="20"><Input placeholder="请输入用户名" /></Layout.Col>
							</Layout.Row>
							<Layout.Row className="col">
								<Layout.Col span="4" className="col-label"><i className="icon-password fa fa-lock"></i></Layout.Col>
								<Layout.Col span="20"><Input type="password" placeholder="请输入密码" /></Layout.Col>
							</Layout.Row>
							<Layout.Row className="col">
								<Layout.Col span="4" className="col-label"><label>&nbsp;</label></Layout.Col>
								<Layout.Col span="12"><Input placeholder="验证码" /></Layout.Col>
								<Layout.Col span="8"><i className="icon-refresh fa fa-refresh"></i></Layout.Col>
							</Layout.Row>
						</div>
						<div className="login-btn">
							<Button type="primary" size="large"><Link to="/main">登录</Link></Button>
						</div>
					</div>
				</Layout.Row>
				<div className="copyright">@技术支持:深圳市智游途信息技术有限公司</div>
			</Layout.Row>
		)
	}
}

export default Login;