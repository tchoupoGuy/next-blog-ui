import styles from './mobile-menu.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import { NavRoutesType } from '../layout.definitions';
import ActiveLink from '@next/components/active-link';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export const MobileMenu = ({ navRoutes }: { navRoutes: NavRoutesType[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.cMobileMenu} ref={menuRef}>
      <button
        className={styles.cMobileMenu__toggle}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>

      {isOpen && (
        <nav className={styles.cMobileMenu__nav} aria-label="Mobile navigation">
          {navRoutes.map((nav) => (
            <ActiveLink
              id={nav.id}
              key={nav.path}
              href={nav.path}
              onClick={() => setIsOpen(false)}
            >
              {nav.name}
            </ActiveLink>
          ))}
        </nav>
      )}
    </div>
  );
};
