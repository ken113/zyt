import React from 'react';
import { Layout,Select,Input,Button,Icon,Form,Card } from 'element-react'
import TopNav from './../../pages/topNav'

import './../../styles/company.scss';

class Company extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.state = {
	  		labelPosition:'right',
	  	}
	}


	render(){

		return(
			<Layout.Row className="page-company">
				<TopNav />
				<div className="ctn-box">
					<Layout.Row type="flex" className="order-title-btn" justify="space-between" className="status-ctn">
						<Layout.Col  className="order-title"><h4>基础设置</h4></Layout.Col>
					</Layout.Row>
					<Card className="box-form">
						<Form labelPosition={this.state.labelPosition} labelWidth="100">
							<Form.Item label="公司名称:">
								<Input className="form-ipt"></Input>
							</Form.Item>
							<Form.Item label="公司电话:">
								<Input className="form-ipt"></Input>
								<span>请认真填写，该信息会显示再发送旅客的预定单邮件中</span>
							</Form.Item>
							<Form.Item label="公司邮箱:">
								<Input className="form-ipt" placeholder="只能填写一个邮箱,格式为xxxx@xx.xxx"></Input>
								<span>请认真填写，该邮箱会作为发送旅客的预定单/供应商邮件中</span>
							</Form.Item>
							<Form.Item label="公司网址:">
								<Input className="form-ipt"></Input>
								<span>请认真填写，该信息会显示再发送旅客的预定单邮件中</span>
							</Form.Item>
							<Form.Item label="其他联系方式:">
								<Input className="form-ipt"></Input>
								<span>请认真填写，该信息会显示再发送旅客的预定单邮件中</span>
							</Form.Item>
							<Form.Item label="&nbsp;">
								<Button type="primary">保存</Button>
								<Button>取消</Button>
							</Form.Item>
						</Form>
					</Card>
				</div>
			</Layout.Row>
		)
	}
}


export default Company;

