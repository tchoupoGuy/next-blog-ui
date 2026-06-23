import styles from './experience.module.scss';
import React from 'react';
import PageTitle from '@next/components/page-title';
import SEO from '@next/components/seo';
import ExperienceContainer from '@next/modules/experiences/experience-container/experience.container';
import { experiences } from '@next/modules/experiences/experience.definitions';

const Experience: React.FC = () => (
  <section className={styles.cExperience}>
    <SEO
      title="Experience"
      description="Professional experience of Guy Tchoupo — Software Developer at Intrado, React Developer at Axya, and Full Stack Developer at Kaayu."
    />
    <PageTitle title="Experience" />
    {experiences.map(({ id, company, imgUrl, title, period, descriptions }) => (
      <ExperienceContainer
        key={id}
        company={company}
        imgUrl={imgUrl}
        title={title}
        period={period}
        descriptions={descriptions}
      />
    ))}
  </section>
);

export default Experience;
