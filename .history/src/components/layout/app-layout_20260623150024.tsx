import styles from './app-layout.module.scss';

import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import Image from 'next/image';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

import headIcon from '@next/public/head-icon.png';

import { navRoutes } from './layout.definitions';
import { DesktopMenu } from './desktop-menu/desktop-menu';
import { MobileMenu } from './mobile-menu/mobile-menu';

const { Header, Content, Footer } = Layout;
interface AppLayoutProps {}

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
  children,
}) => {
  return (
    <Layout className={styles.cAppLayout}>
      <Header className={styles.cAppLayout__header}>
        <div className={styles.brand}>
          <Image
            src={headIcon}
            alt="Guy Tchoupo"
            width={32}
            height={32}
            className={styles.brand__avatar}
          />
          <span className={styles.brand__name}>Guy Tchoupo</span>
        </div>
        <MobileMenu navRoutes={navRoutes} />
        <DesktopMenu navRoutes={navRoutes} />
      </Header>

      <Content className={styles.cAppLayout__content}>
        {children}
      </Content>

      <Footer className={styles.cAppLayout__footer}>
        <span>Guy Tchoupo &copy; {new Date().getFullYear()}</span>
        <div className={styles.cAppLayout__footerSocials}>
          <a
            href="https://github.com/Tchoupo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={styles.socialIcon}
          >
            <GithubFilled />
          </a>
          <a
            href="https://www.linkedin.com/in/guy-tchoupo-945560156/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={styles.socialIcon}
          >
            <LinkedinFilled />
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
