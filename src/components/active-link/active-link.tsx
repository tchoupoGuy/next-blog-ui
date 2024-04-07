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
  const style = {
    marginLeft: 16,
    color: router.asPath === href ? '#1e76e3' : '#000',
    fontWeight: 'bold',
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a key={id} href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default ActiveLink;
