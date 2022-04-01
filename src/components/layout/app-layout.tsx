import styles from "./app-layout.module.scss";

import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { Layout, Avatar, PageHeader, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Route } from "@next/constants/routes";
import ActiveLink from "../active-link";

const { Header, Content, Footer } = Layout;
interface AppLayoutProps {}

const routeHome = [Route.HOME.toString()];

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
  const router = useRouter();
  return (
    <Layout className={styles.cAppLayout}>
      <Header className={styles.cAppLayout__header}>
        <div className={styles.avatarContainer}>
          <Avatar>GT</Avatar>
        </div>
        {navRoutes.map((nav) => {
          return (
            <ActiveLink key={nav.path} href={nav.path}>
              {nav.name}
            </ActiveLink>
          );
        })}
      </Header>

      <Content className={styles.cAppLayout__content}>
        <div className={styles.childrenContainer}>{children}</div>
      </Content>
      <Footer className={styles.cAppLayout__footer}>Guy Tchoupo ©2022</Footer>
    </Layout>
  );
};

export default AppLayout;
