import axyaLogo from '@next/public/assets/img/axya-logo.png';
import kaayuLogo from '@next/public/assets/img/logo.png';
import intradoLogo from '@next/public/assets/img/intrado-url.png';
import { StaticImageData } from "next/image";

export type DescriptionType = {
  id: number;
  description: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  imgUrl: StaticImageData;
  title: string;
  period: string;
  descriptions: DescriptionType[];
};

export const experiences: ExperienceItem[] = [
  {
    id: 'intrado',
    company: 'Intrado',
    imgUrl: intradoLogo,
    title: 'Software Developer',
    period: 'August 2022 – Present',
    descriptions: [
      {
        id: 1,
        description: `Use React.js, TypeScript, RxJS and Next.js to develop, maintain and improve the performance of the web version of the 911 emergency service platform.`,
      },
      {
        id: 2,
        description: `Test and debug the application to ensure that it works optimally across different browsers and devices.`,
      },
    ],
  },
  {
    id: 'axya',
    company: 'Axya',
    imgUrl: axyaLogo,
    title: 'React Developer',
    period: 'August 2019 – June 2022',
    descriptions: [
      {
        id: 1,
        description: `Use React.js, JavaScript, TypeScript and Redux to develop and maintain the Axya platform that helps companies reduce supply-chain risk and increase end-to-end visibility.`,
      },
      {
        id: 2,
        description: `Migrate code written with Redux Thunk middleware to Redux Saga and convert JavaScript code to TypeScript.`,
      },
      {
        id: 3,
        description: `Integrate the React Tracking library to track and document all user interface events.`,
      },
    ],
  },
  {
    id: 'kaayu',
    company: 'Kaayu',
    imgUrl: kaayuLogo,
    title: 'Full Stack Developer',
    period: 'November 2018 – July 2019',
    descriptions: [
      {
        id: 1,
        description: `Use React.js, JavaScript, TypeScript and Redux to deliver and develop the Kaayu job search platform.`,
      },
      {
        id: 2,
        description: `Use React Native, TypeScript, Redux Saga and Expo to develop the Kaayu mobile application for job search.`,
      },
      {
        id: 3,
        description: `Use TypeScript to create APIs and interact with the NoSQL DynamoDB database.`,
      },
    ],
  },
];
