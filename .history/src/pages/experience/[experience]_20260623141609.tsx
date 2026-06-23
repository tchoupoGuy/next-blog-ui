import styles from './experience.module.scss';
import React from 'react';
import PageTitle from '@next/components/page-title';
import SEO from '@next/components/seo';
import axyaLogo from '@next/public/assets/img/axya-logo.png';
import kaayuLogo from '@next/public/assets/img/logo.png';
import intradoLogo from '@next/public/assets/img/intrado-url.png';
import ExperienceContainer from '@next/modules/experiences/experience-container/experience.container';
import {
  axyaDescriptions,
  intradoDescriptions,
  kaayuDescriptions,
} from '@next/modules/experiences/experience.definitions';

const Experience: React.FC = () => {
  return (
    <section className={styles.cExperience}>
      <SEO
        title="Experience"
        description="Professional experience of Guy Tchoupo — Software Developer at Intrado, React Developer at Axya, and Full Stack Developer at Kaayu."
      />
      <PageTitle title="Experience" />
      <ExperienceContainer
        imgUrl={intradoLogo}
        title="Software Developer"
        subTitle="August 2022 – Present"
        descriptions={intradoDescriptions}
      />
      <ExperienceContainer
        imgUrl={axyaLogo}
        title="React Developer"
        subTitle="August 2019 – June 2022"
        descriptions={axyaDescriptions}
      />
      <ExperienceContainer
        imgUrl={kaayuLogo}
        title="Full Stack Developer"
        subTitle="November 2018 – July 2019"
        descriptions={kaayuDescriptions}
      />
    </section>
  );
};

export default Experience;
