import styles from './experience-container.module.scss';
import React, { PropsWithChildren } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Typography } from 'antd';
import { DescriptionType } from '@next/modules/experiences/experience.definitions';

interface Props {
  imgUrl: StaticImageData;
  title: string;
  subTitle: string;
  descriptions: DescriptionType[];
}

const ExperienceContainer: React.FC<PropsWithChildren<Props>> = ({
  imgUrl,
  descriptions,
  subTitle,
  title,
}) => {
  return (
    <div className={styles.cExperienceContainer}>
      <div className={styles.cExperienceContainer__logo}>
        <Image alt={`${title} company logo`} src={imgUrl} className={styles.img} />
      </div>

      <div className={styles.cExperienceContainer__content}>
        <Typography.Title className={styles.title}>{title}</Typography.Title>
        <Typography.Title className={styles.subtitle}>
          {subTitle}
        </Typography.Title>
        <ul>
          {descriptions.map(({ description, id }: DescriptionType) => (
            <li key={id}>
              <Typography.Paragraph className={styles.description}>
                {description}
              </Typography.Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceContainer;
