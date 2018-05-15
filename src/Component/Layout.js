import React from 'react'
import {Layout, Menu, Breadcrumb,Icon} from 'antd';
import {
  // BrowserRouter as Router,
  Route,
  // Switch,
  Link
} from 'react-router-dom';
// 按需加载
import async from '../async';
import './Layout.css';
/*****************************/
// import { ChartCard, MiniBar } from 'components/Charts';
// import { Tooltip } from 'antd';
/*****************************/
let BarChart = async(() => import("./Charts/MiniBarChart"));
let MyTable = async(() => import("./Table"));
let UserLayout = async(() => import("./Login"));
/*****************************/
 const { Header, Content, Footer, Sider } = Layout;
 const SubMenu = Menu.SubMenu;
/*****************************/

/*****************************/
        //Barchart//
/*****************************/


/*****************************/


class MyLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          trigger={null}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="compass" />
              <span>Dashboard</span>
              <Link to='/'></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Products</span>
              <Link to='/Table'></Link>
              {/* <Link to="/"></Link> */}
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Login</span></span>}
            >
              <Menu.Item key="3">
                <Icon type="desktop" />
                <span>Login</span>
                <Link to='/Login'></Link>
              </Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            </div> */}
            <Route path='/' exact component={BarChart}></Route>
            <Route path='/Table' exact component={MyTable}></Route>
            <Route path='/Login' exact component={UserLayout}></Route>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout
