import styles from './mobile-menu.module.scss';
import React from 'react';
import { NavRoutesType } from '../layout.definitions';
import ActiveLink from '@next/components/active-link';
import { MenuUnfoldOutlined } from '@ant-design/icons';

export const MobileMenu = ({ navRoutes }: { navRoutes: NavRoutesType[] }) => {
  return (
    <div className={styles.cMobileMenu}>
      <div className={styles.cMobileMenu__menuButton}>
        <MenuUnfoldOutlined />
        <div className={styles.activeLink}>
          {navRoutes.map((nav) => {
            return (
              <ActiveLink id={nav.id} key={nav.path} href={nav.path}>
                {nav.name}
              </ActiveLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
