/*****************************/
//This page for the whole project Layout.
/*****************************/

import React from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {
  // BrowserRouter as Router,
  Route,
  // Switch,
  Link
} from 'react-router-dom';
import async from '../async';
import './Layout.css';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
/*****************************/
// import { ChartCard, MiniBar } from 'components/Charts';
// import { Tooltip } from 'antd';
/*****************************/
let BarChart = async (() => import ("./Charts/MiniBarChart"));
let MyTable = async (() => import ("./Table"));
let UserLayout = async (() => import ("./Login"));
let RegistrationForm = async (() => import ("./Register"));
/*****************************/
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
/*****************************/

/*****************************/
//Barchart//
/*****************************/

/*****************************/

class MyLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (<Layout style={{
        minHeight: '100vh'
      }}>
      <Sider collapsible="collapsible" collapsed={this.state.collapsed} onCollapse={this.onCollapse} trigger={null}>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="compass"/>
            <span>Dashboard</span>
            <Link to='/'></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop"/>
            <span>Products</span>
            <Link to='/Table'></Link>
            {/* <Link to="/"></Link> */}
          </Menu.Item>
          <SubMenu key="sub1" title={<span> < Icon type = "user" />< span > Login</span></span>}>
            <Menu.Item key="3">
              <Icon type="coffee"/>
              <span>Login</span>
              <Link to='/Login'></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="loading"/>
              <span>Register</span>
              <Link to='/Register'></Link>
            </Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span> < Icon type = "team" />< span > Team</span></span>}>
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file"/>
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{
            background: '#fff',
            padding: 0,
            float: 'right'
          }}>
          <Icon className="trigger" type={this.state.collapsed
              ? 'menu-unfold'
              : 'menu-fold'} onClick={this.toggle}/>
          <HeaderSearch placeholder="Site search" dataSource={['Tip 1', 'Tip 2', 'Tip 3']} onSearch={(value) => {
              console.log('input', value); // eslint-disable-line
            }} onPressEnter={(value) => {
              console.log('enter', value); // eslint-disable-line
            }}/> {/* </div> */}
        </Header>
        <Content style={{
            margin: '0 16px'
          }}>
          <Breadcrumb style={{
              margin: '16px 0'
            }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
          </Breadcrumb>
          <Route path='/' exact="exact" component={BarChart}></Route>
          <Route path='/Table' exact="exact" component={MyTable}></Route>
          <Route path='/Login' exact="exact" component={UserLayout}></Route>
          <Route path='/Register' exact="exact" component={RegistrationForm}></Route>
          {/* this router for the whole project */}
        </Content>
        <Footer style={{
            textAlign: 'center'
          }}>
          Frank Huo
        </Footer>
      </Layout>
    </Layout>
    )
  }
}

export default MyLayout
