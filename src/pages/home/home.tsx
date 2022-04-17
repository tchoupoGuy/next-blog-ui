import styles from "./home.module.scss";
import React from "react";
import Image from "next/image";

import { Typography } from "antd";
import profilePicture from "@next/assets/img/picture-profile.jpg";

const HomePage: React.FC = () => {
  return (
    <>
      <section className={styles.cHomePage}>
        <div className={styles.cHomePage__textContainer}>
          <Typography.Title level={5} className={styles.helloContainer}>
            Hello I am
          </Typography.Title>
          <Typography.Title className={styles.nameContainer}>
            Guy Tchoupo
          </Typography.Title>
          <Typography.Title level={4} className={styles.jobPositionContainer}>
            Frontend developer
          </Typography.Title>
        </div>
        <div className={styles.cHomePage__imgContainer}>
          <Image
            src={profilePicture}
            width={300}
            height={300}
            className={styles.profilePicture}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
