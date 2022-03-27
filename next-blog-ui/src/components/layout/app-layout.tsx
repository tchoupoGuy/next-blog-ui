import styles from "./app-layout.module.scss";

import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { Layout, Avatar, PageHeader, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Route } from "@next/constants/routes";

const { Header, Content, Footer } = Layout;
interface AppLayoutProps {}

const routeFeed = [Route.HOME.toString()];

const navRoutes = [
  {
    path: Route.HOME.toString(),
    name: "HOME",
  },
  {
    path: Route.EXPERIENCE.toString(),
    name: "EXPERIENCE",
  },
  {
    path: Route.ACHIEVEMENTS.toString(),
    name: "ACHIEVEMENTS",
  },
  {
    path: Route.ABOUT.toString(),
    name: "ABOUT",
  },
  {
    path: Route.BLOGS.toString(),
    name: "BLOGS",
  },
  {
    path: Route.CONTACTS.toString(),
    name: "CONTACTS",
  },
];

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
}) => {
  return (
    <Layout
    // className={styles.cAppLayout}
    >
      <Header
        // className={styles.cAppLayout__header}
        style={{
          position: "fixed",
          top: "0%",
          zIndex: 1,
          width: "100%",
          background: "#f5f5f5",
          padding: 24,
          display: "flex",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Avatar>GT</Avatar>
        </div>
        {navRoutes.map((nav) => {
          return (
            <a style={{ marginLeft: 8 }} key={nav.path} href={nav.path}>
              {nav.name}
            </a>
          );
        })}
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          width: "100%",
          textAlign: "center",
          position: "fixed",
          bottom: "0%",
          padding: 16,
          background: "#fafafa",
        }}
      >
        Guy Tchoupo ©2022
      </Footer>
    </Layout>
  );
};

export default AppLayout;
