import React from 'react';
import { Layout,Select,Input,Button,Ico,Table,Pagination } from 'element-react'
import TopNav from './../pages/topNav'
import './../styles/order.scss';

class Order extends React.Component {


	constructor(props) {
	  	super(props);

	  	this.state = {
		    columns: [{
				label: "订单号",
				prop: "orderid",
			},{
				label: "客户ID",
				prop: "customerid",
			},{
				label: "姓名",
				prop: "name"
			},{
				label: "预定项目",
				prop: "project",
				width: 230
			},{
				label: "日期",
				prop: "date"
			},{
				label: "人数",
				prop: "people"
			},{
				label: "状态",
				prop: "state"
			},{
				label: "留言板",
				prop: "remark"
			},{
				label: "操作",
				prop: "opt",
				render:()=>{
					return <span><Button type="text" size="small">查看</Button><Button type="text" size="small">编辑</Button></span>
				}
			}],
			data:[{
				orderid:'2016456434433454',
				customerid:'huangshuo23432',
				name:'测试不要下单哦',
				project:'(YQ)测试巴厘岛欧舒丹SPA',
				date:'2017-10-09',
				people:'123/11/11',
				state:'位填写',
				remark:'测试数据'
			},{
				orderid:'2016456434433454',
				customerid:'huangshuo23432',
				name:'测试不要下单哦',
				project:'(YQ)测试巴厘岛欧舒丹SPA',
				date:'2017-10-09',
				people:'123/11/11',
				state:'位填写',
				remark:'测试数据'
			}]
		}
	}

	render(){

		return(
			<Layout.Row className="page-order">
				<TopNav />
				<div className="ctn-box">
					<Layout.Row type="flex" className="order-title-btn" justify="space-between" className="status-ctn">
						<Layout.Col span="2" className="order-title"><h4>订单列表</h4></Layout.Col>
						<Layout.Col span="18">
							<Button type="primary">全部</Button>
							<Button>未填写</Button>
							<Button>待核对</Button>
							<Button>已核对</Button>
							<Button>带检查</Button>
							<Button>处理中</Button>
							<Button>请求中</Button>
							<Select value='zh'>
								<Select.Option label='标签查询' value='zh' />
								<Select.Option label='英文' value='en' />
							</Select>
							<Select value='zh'>
								<Select.Option label='状态查询' value='zh' />
								<Select.Option label='英文' value='en' />
							</Select>
						</Layout.Col>
						<Layout.Col span="4" className="order-btn">
							<Button><i className="icon-refresh fa fa-refresh"></i>刷新</Button>
							<Button type="primary">新增订单</Button>
						</Layout.Col>
					</Layout.Row>
					<Layout.Row type="flex" justify="space-between" className="opt-ctn">
						<Layout.Col span="2" className="order-title">对0个订单:</Layout.Col>
						<Layout.Col span="13">
							<Button>核对</Button>
							<Button>发送</Button>
							<Button>确认</Button>
							<Button>取消</Button>
							<Button>拒绝</Button>
							<Button>请求取消</Button>
							<Button>接单</Button>
							<Button>作废</Button>
							<Select value='zh'>
								<Select.Option label='贴/撕标签' value='zh' />
								<Select.Option label='英文' value='en' />
							</Select>
						</Layout.Col>
						<Layout.Col span="9" className="search-ctn">
							<Select value='zh1'>
								<Select.Option label='客户ID' value='zh1' />
								<Select.Option label='英文' value='en' />
							</Select>
							<Input placeholder="模糊搜索" icon="search" className="input-search"/>
							<Button>搜索</Button>
							<Button>高级搜索</Button>
							<Button icon="caret-bottom">导出</Button>
						</Layout.Col>
					</Layout.Row>

					<div className="f-line"></div>

					<Table
				      style={{width: '100%'}}
				      columns={this.state.columns}
				      data={this.state.data}
				    />
				    <Pagination layout="total, sizes, prev, pager, next, jumper" total={400} pageSizes={[100, 200, 300, 400]} pageSize={100} currentPage={5}/>

				</div>

			</Layout.Row>
		)
	}
}


export default Order;
