import styles from "./page-title.module.scss";
import React from "react";
interface PageTitleProps {
  title: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={styles.cPageTitle}>
      <span className={styles.cPageTitle__title}>{title}</span>
    </div>
  );
};

export default PageTitle;
