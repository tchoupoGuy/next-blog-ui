import styles from './experience-container.module.scss';
import React, { PropsWithChildren } from 'react';

import { Avatar, Typography } from 'antd';
import Image from 'next/image';
interface Props {
  imgUrl: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
}

const ExperienceContainer: React.FC<PropsWithChildren<Props>> = ({
  imgUrl,
  description,
  subTitle,
  title,
}) => {
  return (
    <>
      <div className={styles.cExperienceContainer}>
        <div className={styles.cExperienceContainer__logo}>
          <Image
            alt={`company logo`}
            src={imgUrl.src}
            width={imgUrl.width}
            height={imgUrl.height}
            className={styles.img}
          />
        </div>

        <div className={styles.cExperienceContainer__content}>
          <Typography.Title className={styles.title}>{title}</Typography.Title>
          <Typography.Title className={styles.subtitle}>
            {subTitle}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {description}
          </Typography.Paragraph>
        </div>
        <Avatar />
      </div>
    </>
  );
};

export default ExperienceContainer;
