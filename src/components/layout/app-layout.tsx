import styles from "./app-layout.module.scss";

import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

import headIcon from "@next/public/head-icon.png";
import ActiveLink from "../active-link";
import { navRoutes } from "./layout.definitions";

const { Header, Content, Footer } = Layout;
interface AppLayoutProps {}

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
}) => {
  const router = useRouter();
  return (
    <Layout className={styles.cAppLayout}>
      <Header className={styles.cAppLayout__header}>
        <div className={styles.avatarContainer}>
          <Image
            src={headIcon}
            alt="head icon"
            width={25}
            height={25}
            className={styles.avatarContainer__img}
          />
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
