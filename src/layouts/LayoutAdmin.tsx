import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu theme="dark" style={{ height: "100%" }}>
            <Menu.Item>
              <NavLink to="/admin">
                <DashboardOutlined /> Thống kê
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/categorys">
                <FileOutlined /> Danh mục
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/products">
                <DesktopOutlined /> Sản phẩm
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/users">
                <UserOutlined /> Người dùng
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
