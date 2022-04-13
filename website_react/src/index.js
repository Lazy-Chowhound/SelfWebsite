import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import {Breadcrumb, Layout, Menu} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class MainPage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider theme="light" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"></div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item className="title" key="title">
                            音频数据集系统
                        </Menu.Item>
                        <Menu.Item key="article" icon={<PieChartOutlined/>}>
                            文章
                        </Menu.Item>
                        <Menu.Item key="running" icon={<DesktopOutlined/>}>
                            跑步
                        </Menu.Item>
                        <SubMenu key="format" icon={<UserOutlined/>} title="格式转换">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined/>}>
                            关于作者和网站
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>szp's website ©2022 Created by SZP</Footer>
                </Layout>
            </Layout>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MainPage/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
