import styles from "./experience-container.module.scss";
import React, { PropsWithChildren } from "react";

import { Avatar, Typography } from "antd";
import Image from "next/image";
interface Props {
  imgUrl: StaticImageData;
  title: string;
  subTitle: string;
  imgWidth: number;
  imgHeight: number;
}

const ExperienceContainer: React.FC<PropsWithChildren<Props>> = ({
  imgUrl,
  subTitle,
  title,
  imgHeight,
  imgWidth,
  children,
}) => {
  return (
    <>
      <div className={styles.cExperienceContainer}>
        <div className={styles.cExperienceContainer__logo}>
          <Image
            alt="company logo"
            src={imgUrl}
            width={imgWidth}
            height={imgHeight}
            className={styles.img}
          />
        </div>

        <div className={styles.cExperienceContainer__content}>
          <Typography.Title className={styles.title}>{title}</Typography.Title>
          <Typography.Title className={styles.subtitle}>
            {subTitle}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {children}
          </Typography.Paragraph>
        </div>
        <Avatar />
      </div>
    </>
  );
};

export default ExperienceContainer;
