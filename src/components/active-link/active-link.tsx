import styles from './active-link.module.scss';
import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
interface ActiveLinkProps {
  href: string;
  id: number;
}

const ActiveLink: React.FC<PropsWithChildren<ActiveLinkProps>> = ({
  children,
  href,
  id,
}) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      key={id}
      href={href}
      onClick={handleClick}
      className={` ${styles.activeLink} ${
        router.asPath ? styles.linkHoverColor : styles.linkBlackColor
      }`}
    >
      {children}
    </a>
  );
};

export default ActiveLink;
