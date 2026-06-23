import styles from './active-link.module.scss';
import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  href: string;
  id: number;
  onClick?: () => void;
}

const ActiveLink: React.FC<PropsWithChildren<ActiveLinkProps>> = ({
  children,
  href,
  id,
  onClick,
}) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
    onClick?.();
  };

  return (
    <a
      key={id}
      href={href}
      onClick={handleClick}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
};

export default ActiveLink;
