import styles from "./experience.module.scss";
import React from "react";
import PageTitle from "@next/components/page-title";

const Experinence: React.FC = () => {
  return (
    <section className={styles.cExperience}>
      <PageTitle title="Experinence" />
    </section>
  );
};

export default Experinence;
