import React, {useState} from 'react';
import './App.css';
import ListUser from "./features/user/ListUser";
import {TeamOutlined,} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import AddUser from "./features/user/AddUser";
import {useAppDispatch} from "./app/hooks";
import userSlice from "./features/user/userSlice";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Team FE', '1', <TeamOutlined/>),
];

function App() {
	const [collapsed, setCollapsed] = useState(true);
	const dispatch = useAppDispatch();

	const [open, setOpen] = useState(false);

	const onCreate = (values: any) => {
		console.log('Received values of form: ', values);
		dispatch(userSlice.actions.addUser(values));
		setOpen(false);
	};
	return (

		<Layout style={{minHeight: '100vh'}}>
			<Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
				<div className="logo"/>
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{padding: 0}}/>
				<Content style={{margin: '0 16px'}}>
					<Breadcrumb style={{margin: '16px 0'}}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
						<div>
							<Button
								type="primary"
								onClick={() => {
									setOpen(true);
								}}
							>
								New Collection
							</Button>
							<AddUser
								open={open}
								onCreate={onCreate}
								onCancel={() => {
									setOpen(false);
								}}
							/>
						</div>
						<ListUser/>
					</div>
				</Content>
				<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	);
}

export default App;
