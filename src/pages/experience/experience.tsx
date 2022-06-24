import styles from "./experience.module.scss";
import React from "react";
import PageTitle from "@next/components/page-title";
import ExperienceContainer from "./experience-container/experience.container";
import axyaLogo from "@next/public/assets/img/grad4-network-logo.png";
import kaayuLogo from "@next/public/assets/img/logo.png";

const Experience: React.FC = () => {
  return (
    <section className={styles.cExperience}>
      <PageTitle title="Experience" />
      <ExperienceContainer
        imgHeight={380}
        imgWidth={520}
        imgUrl={axyaLogo}
        title="React Developer"
        subTitle="full time"
        description="I worked as a frontend developer at Axya inc. In line with the company's expectations, I developed and energized the platform's web pages using JavaScript and the Redux Thunk Middleware. The platform taking volume, I migrated the code written with the Middleware Redux Thunk to Redux Saga and converted the code written with the Javascript language, by the Typescript language, in order to produce a more reliable code allowing to detect bugs before the  compilation."
      />
      <ExperienceContainer
        imgHeight={150}
        imgWidth={200}
        imgUrl={kaayuLogo}
        title="Full Stack developer"
        subTitle="full time"
        description="Collaborate with two senior developers to build the Kaayu web and mobile application.Use Amazon DynamoDB to create APIs to interact between backend and frontend."
      />
    </section>
  );
};

export default Experience;
