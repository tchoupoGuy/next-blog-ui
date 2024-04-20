import styles from './desktop-menu.module.scss';
import React from 'react';
import { NavRoutesType } from '../layout.definitions';
import ActiveLink from '@next/components/active-link';

export const DesktopMenu = ({ navRoutes }: { navRoutes: NavRoutesType[] }) => {
  return (
    <div className={styles.cDesktopMenu}>
      <div className={styles.cDesktopMenu__activeLink}>
        {navRoutes.map((nav) => {
          return (
            <ActiveLink id={nav.id} key={nav.path} href={nav.path}>
              {nav.name}
            </ActiveLink>
          );
        })}
      </div>
    </div>
  );
};
