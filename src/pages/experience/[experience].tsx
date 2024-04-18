import styles from './experience.module.scss';
import React from 'react';
import PageTitle from '@next/components/page-title';
import axyaLogo from '@next/public/assets/img/axya-logo.png';
import kaayuLogo from '@next/public/assets/img/logo.png';
import intradoLogo from '@next/public/assets/img/intrado-url.png';
import ExperienceContainer from '@next/modules/experiences/experience-container/experience.container';
import {
  axyaDescritions,
  intradoDescritions,
  kaayuDescritions,
} from '@next/modules/experiences/experience.definitions';

const Experience: React.FC = () => {
  return (
    <section className={styles.cExperience}>
      <PageTitle title="Experience" />
      <ExperienceContainer
        imgUrl={intradoLogo}
        title="Software Developer"
        subTitle="August 2022 at today"
        descriptions={intradoDescritions}
      />
      <ExperienceContainer
        imgUrl={axyaLogo}
        title="React Developer"
        subTitle="August 2019 at June 2022"
        descriptions={axyaDescritions}
      />
      <ExperienceContainer
        imgUrl={kaayuLogo}
        title="Full Stack developer"
        subTitle="November 2018 at July 2019"
        descriptions={kaayuDescritions}
      />
    </section>
  );
};

export default Experience;
