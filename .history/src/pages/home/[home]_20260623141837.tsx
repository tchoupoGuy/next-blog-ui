import styles from './home.module.scss';
import React from 'react';
import Image from 'next/image';
import { Typography } from 'antd';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { ImgUrls } from '@next/constants/imgUrls';
import SEO from '@next/components/seo';

const HomePage: React.FC = () => {
  const handleOpenLinkedinProfile = () => {
    window.open('https://www.linkedin.com/in/guy-tchoupo-945560156/', '_blank', 'noopener,noreferrer');
  };

  const handleOpenGithubProfile = () => {
    window.open('https://github.com/Tchoupo', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO
        title="Home"
        description="Guy Tchoupo — Frontend Developer specialised in React, TypeScript and Next.js. Based in Montreal, QC."
      />
      <section className={styles.cHomePage}>
        <div className={styles.cHomePage__textContainer}>
          <Typography.Text className={styles.greeting}>Hello, I am</Typography.Text>
          <h1 className={styles.name}>Guy Tchoupo</h1>
          <p className={styles.jobPosition}>Frontend Developer</p>

          <div className={styles.cHomePage__iconContainer}>
            <button
              className={styles.socialButton}
              onClick={handleOpenLinkedinProfile}
              aria-label="LinkedIn profile"
            >
              <LinkedinFilled />
            </button>
            <button
              className={styles.socialButton}
              onClick={handleOpenGithubProfile}
              aria-label="GitHub profile"
            >
              <GithubFilled />
            </button>
          </div>
        </div>

        <div className={styles.cHomePage__imgContainer}>
          <Image
            alt="Guy Tchoupo — Frontend Developer"
            src={ImgUrls.PROFILE_PICTURE}
            width={400}
            height={400}
            priority
            className={styles.profilePicture}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
