import styles from "./home.module.scss";
import React from "react";
import Image from "next/image";

import { Avatar, Typography } from "antd";
import profilePicture from "@next/public/assets/img/profile-picture-two.jpg";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { HomeData } from "@next/scripts/home";
import { homeData } from "@next/modules/app/home/home.definitions";

const HomePage: React.FC = () => {
  const handleOpenLinkedinProfile = () => {
    window.open("https://www.linkedin.com/in/guy-tchoupo-945560156/", "_blank");
  };
  const HIDE_ICON = false;

  return (
    <>
      <section className={styles.cHomePage}>
        <div className={styles.cHomePage__textContainer}>
          <Typography.Title level={5} className={styles.helloContainer}>
            {homeData._title}
          </Typography.Title>
          <Typography.Title className={styles.nameContainer}>
            {homeData.fullName}
          </Typography.Title>
          <Typography.Title level={4} className={styles.jobPositionContainer}>
            {homeData.position}
          </Typography.Title>
          <div className={styles.cHomePage__iconContainer}>
            <Avatar
              icon={
                <LinkedinFilled
                  className={styles.iconContainer__color}
                  onClick={handleOpenLinkedinProfile}
                />
              }
              size={70}
              className={styles.iconContainer}
            />

            {HIDE_ICON && (
              <Avatar
                size={70}
                icon={<GithubFilled className={styles.iconContainer__color} />}
                className={styles.iconContainer}
              />
            )}
          </div>
        </div>
        <div className={styles.cHomePage__imgContainer}>
          <Image
            alt="profile logo"
            src={homeData._imgUrl as string}
            width={500}
            height={500}
            className={styles.profilePicture}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
