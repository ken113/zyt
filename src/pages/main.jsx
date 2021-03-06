import React from 'react';
import { Layout, Select, Input, Button, Icon } from 'element-react'
import TopNav from './../pages/topNav'
import './../styles/main.scss';

class Main extends React.Component {

	render() {

		return (
			<Layout.Row className="page-main">
				<TopNav />
				<div className="ctn-box">
					
					<Layout.Row type="flex" className="main-title-btn" justify="space-between">
						<Layout.Col span="12" className="main-title"><h4>代办事项</h4></Layout.Col>
						<Layout.Col span="12" className="main-btn"><Button><i className="icon-refresh fa fa-refresh"></i>刷新</Button></Layout.Col>
					</Layout.Row>
					<div className="f-line"></div>

					<div className="block" >
						<div className="left-side" >
							<div className="main-title-btn-left">
								<span>
									要<br />跟<br />进<br /><em>12</em>
								</span>
							</div>
						</div>
						<div className="right-side">
							<div className="main-title-btn-right">
							<Layout.Row gutter="10">
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
							</Layout.Row>
						</div>
						</div>
					</div>
					
					<div className="block" >
						<div className="left-side" >
							<div className="main-title-btn-left">
								<span>
									待<br />检<br />查<br /><em>12</em>
								</span>
							</div>
						</div>
						<div className="right-side">
							<Layout.Row gutter="10" >
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								

							</Layout.Row>

						</div>
					</div>

					<div className="block" >
						<div className="left-side" >
							<div className="main-title-btn-left">
								<span>
									请<br />求<br />中<br /><em>12</em>
								</span>
							</div>
						</div>
						<div className="right-side">
							<Layout.Row gutter="10" >
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
							</Layout.Row>
						</div>
					</div>
					<div className="block" >
						<div className="left-side" >
							<div className="main-title-btn-left">
								<span>
									已<br />接<br />单<br /><em>12</em>
								</span>
							</div>
						</div>
						<div className="right-side">
							<Layout.Row gutter="10" >
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>

								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>未填写</span>
											<em>10</em>
										</div>
										<div className="mb-bottom">查看订单</div>
									</div>
								</Layout.Col>

							</Layout.Row>
						</div>
					</div>

					<Layout.Row type="flex" className="main-title-btn" justify="space-between">
						<Layout.Col span="12" className="main-title"><h4>业务看板</h4></Layout.Col>
						<Layout.Col span="12" className="main-btn"><Button><i className="icon-refresh fa fa-refresh"></i>刷新</Button></Layout.Col>
					</Layout.Row>
					<div className="f-line"></div>

					<div className="block business" >
						<div className="left-side" >
							<div className="main-title-btn-left ">
								<span>
									订<br />单<br />销<br />量
								</span>
							</div>
						</div>
						<div className="right-side">
							<Layout.Row gutter="10" >
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>今日订单</span>
											<em>110</em>
										</div>
										<div className="mb-bottom">昨日订单555</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>今日订单</span>
											<em>110</em>
										</div>
										<div className="mb-bottom">昨日订单555</div>
									</div>
								</Layout.Col>
							</Layout.Row>
						</div>
					</div>

					<div className="block business" >
						<div className="left-side" >
							<div className="main-title-btn-left ">
								<span>
								旅<br />客<br />服<br />务
							</span>
							</div>
						</div>
						<div className="right-side">
							<Layout.Row gutter="10" >
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>今日订单</span>
											<em>110</em>
										</div>
										<div className="mb-bottom">昨日订单555</div>
									</div>
								</Layout.Col>
								<Layout.Col xs="24" sm="12" md="6" lg="4">
									<div className="main-box">
										<div className="mb-top">
											<span>今日订单</span>
											<em>110</em>
										</div>
										<div className="mb-bottom">昨日订单555</div>
									</div>
								</Layout.Col>
							</Layout.Row>
						</div>
					</div>
				</div>
			</Layout.Row>
		)
	}
}


export default Main;