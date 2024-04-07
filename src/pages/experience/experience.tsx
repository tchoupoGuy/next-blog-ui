import styles from './experience.module.scss';
import React from 'react';
import PageTitle from '@next/components/page-title';
import axyaLogo from '@next/public/assets/img/axya-logo.png';
import kaayuLogo from '@next/public/assets/img/kaayu-logo.png';
import intradoLogo from '@next/public/assets/img/intrado-url.png';
import ExperienceContainer from './experience-container/experience.container';

const Experience: React.FC = () => {
  return (
    <section className={styles.cExperience}>
      <PageTitle title="Experience" />
      <ExperienceContainer
        imgUrl={intradoLogo}
        title="Software Developer"
        subTitle="August 2022 at today"
        description="I worked as a frontend developer at Intrado Life & Safety Canada Inc. In line with the company's expectations, Design, develop and maintain the web version of the 911 emergency service platform."
      />
      <ExperienceContainer
        imgUrl={axyaLogo}
        title="React Developer"
        subTitle="August 2019 at June 2022"
        description="I worked as a frontend developer at Axya inc. In line with the company's expectations, I developed and energized the platform's web pages using JavaScript and the Redux Thunk Middleware. The platform taking volume, I migrated the code written with the Middleware Redux Thunk to Redux Saga and converted the code written with the Javascript language, by the Typescript language, in order to produce a more reliable code allowing to detect bugs before the  compilation."
      />
      <ExperienceContainer
        imgUrl={kaayuLogo}
        title="Full Stack developer"
        subTitle="November 2018 at July 2019"
        description="Collaborate with two senior developers to build the Kaayu web and mobile application.Use Amazon DynamoDB to create APIs to interact between backend and frontend."
      />
    </section>
  );
};

export default Experience;
