import styles from './experience.module.scss';
import React from 'react';
import PageTitle from '@next/components/page-title';
import ExperienceContainer from './experience-container/experience.container';
import axyaLogo from '@next/public/assets/img/grad4-network-logo.png';
import kaayuLogo from '@next/public/assets/img/logo.png';
import intradoLogo from '@next/public/assets/img/intrado-url.png';

const Experience: React.FC = () => {
  return (
    <section className={styles.cExperience}>
      <PageTitle title="Experience" />
      <ExperienceContainer
        imgHeight={280}
        imgWidth={420}
        imgUrl={axyaLogo}
        title="React Developer"
        subTitle="full time"
      >
        <>
          <ul>
            <li>{`Deliver and develop a submission module on calls for request for quotation (RFQ) with React.JS and Redux library.`}</li>
            <li>{`Work With Middleware Redux Thunk For Creating Asynchronous actions, and Axios to communicate with the Rest API.`}</li>
            <li>{`Configure and use backend environment using Python language and Django Rest API framework
`}</li>
            <li>{`Use Postman to test APIs `}</li>
            <li>{`Implement interceptors with Axios to support JWT authentication mechanism 
`}</li>
            <li>{`Migrate code written with Middleware Redux Thunk to Redux Saga and convert code written with JavaScript to TypeScript.`}</li>
            <li>{`Integrate React Tracking library to track and document all User Interface events
`}</li>
            <li>{`Work in agile mode and in close collaboration with the product designer and backend team to deliver functionalities on time.`}</li>
            <li>{`Participate in code review..
`}</li>
          </ul>
          <p>{`Technological environment: Visual studio code, gitlab, Figma,Redux Saga | Thunk, React.Js, React Tracking, Material UI, Javascript, Typescript, CSS, Sass, Jest, Jira, Django Rest Api, Postman
`}</p>
        </>
      </ExperienceContainer>
      <ExperienceContainer
        imgHeight={280}
        imgWidth={420}
        imgUrl={kaayuLogo}
        title="Full Stack developer"
        subTitle="full time"
      >
        <>
          <ul>
            <li>{`Collaborate with two seniors developers to build Kaayu web and mobile application `}</li>
            <li>{`Use Typescript language and Next.js library to create and energize web pages. 
`}</li>
            <li>{`Use Redux Saga library to facilitate the reading, writing and testing asynchronous actions. `}</li>
            <li>{`Use Node.Js to create APIs to interact with the database between backend and frontend `}</li>
            <li>{`Use Insomnia to test APIs
`}</li>
            <li>{`Help create 100% reusable code and libraries for future uses
`}</li>
            <li>{`Develop Kaayu mobile application using React Native library.
`}</li>
          </ul>
          <p>
            {`Technological environment: Amazone DynamoDB, Next.Js, Zeplin, Visual studio code,github,React.Js, Redux Saga | Thunk, React Native, Ant Design, Typescript, CSS, Sass, Jest, Jira, Insomnia
`}
          </p>
        </>
      </ExperienceContainer>
    </section>
  );
};

export default Experience;
