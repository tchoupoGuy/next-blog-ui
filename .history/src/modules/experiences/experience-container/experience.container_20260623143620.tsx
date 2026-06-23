import styles from './experience-container.module.scss';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Typography } from 'antd';
import { DescriptionType } from '@next/modules/experiences/experience.definitions';

interface Props {
  imgUrl: StaticImageData;
  company: string;
  title: string;
  period: string;
  descriptions: DescriptionType[];
}

const ExperienceContainer: React.FC<Props> = ({
  imgUrl,
  company,
  descriptions,
  period,
  title,
}) => {
  return (
    <article className={styles.cExperienceContainer}>
      <div className={styles.cExperienceContainer__logo}>
        <Image alt={`${company} logo`} src={imgUrl} className={styles.img} />
      </div>

      <div className={styles.cExperienceContainer__content}>
        <Typography.Title level={3} className={styles.title}>
          {title}
        </Typography.Title>
        <Typography.Text className={styles.period}>{period}</Typography.Text>
        <ul className={styles.descriptionList}>
          {descriptions.map(({ description, id }: DescriptionType) => (
            <li key={id}>
              <Typography.Paragraph className={styles.description}>
                {description}
              </Typography.Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceContainer;
