import styles from './page-title.module.scss';
import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={styles.cPageTitle}>
      <h1 className={styles.cPageTitle__title}>{title}</h1>
    </div>
  );
};

export default PageTitle;
