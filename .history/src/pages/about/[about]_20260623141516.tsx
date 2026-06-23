import React from 'react';
import PageTitle from '@next/components/page-title';
import SEO from '@next/components/seo';
import styles from './about.module.scss';

const About: React.FC = () => {
  return (
    <section className={styles.cAbout}>
      <SEO
        title="About"
        description="Learn more about Guy Tchoupo, a Frontend Developer based in Montreal with expertise in React, TypeScript, Next.js and React Native."
      />
      <PageTitle title="About" />

      <div className={styles.cAbout__content}>
        <p className={styles.paragraph}>
          I am a <strong>Frontend Developer</strong> based in Montréal, QC, with
          a passion for crafting fast, accessible, and visually polished web
          applications.
        </p>
        <p className={styles.paragraph}>
          I specialise in <strong>React</strong>, <strong>TypeScript</strong>,{' '}
          <strong>Next.js</strong> and <strong>React Native</strong>, and I have
          experience working across the full stack — from UI components to REST
          API integration and mobile apps.
        </p>
        <p className={styles.paragraph}>
          Outside of coding I enjoy contributing to open-source projects,
          exploring new web technologies, and continuously improving my craft.
        </p>

        <div className={styles.cAbout__skills}>
          {[
            'React',
            'TypeScript',
            'Next.js',
            'React Native',
            'Redux / Redux Saga',
            'Node.js',
            'SCSS / CSS Modules',
            'REST APIs',
          ].map((skill) => (
            <span key={skill} className={styles.skillBadge}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
