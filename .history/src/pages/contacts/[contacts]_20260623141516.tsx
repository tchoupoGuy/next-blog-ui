import React from 'react';
import PageTitle from '@next/components/page-title';
import SEO from '@next/components/seo';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LinkedinFilled,
} from '@ant-design/icons';
import styles from './contacts.module.scss';

const contactItems = [
  {
    icon: <MailOutlined />,
    label: 'Email',
    value: 'guytchoupo@gmail.com',
    href: 'mailto:guytchoupo@gmail.com',
  },
  {
    icon: <PhoneOutlined />,
    label: 'Phone',
    value: '+1 438 580 5709',
    href: 'tel:+14385805709',
  },
  {
    icon: <EnvironmentOutlined />,
    label: 'Location',
    value: 'Montréal, QC',
    href: null,
  },
  {
    icon: <LinkedinFilled />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/guy-tchoupo',
    href: 'https://www.linkedin.com/in/guy-tchoupo-945560156/',
  },
];

const Contacts: React.FC = () => {
  return (
    <section className={styles.cContacts}>
      <SEO
        title="Contacts"
        description="Get in touch with Guy Tchoupo — Frontend Developer based in Montréal, QC."
      />
      <PageTitle title="Contacts" />

      <div className={styles.cContacts__grid}>
        {contactItems.map(({ icon, label, value, href }) => (
          <div key={label} className={styles.contactCard}>
            <span className={styles.contactCard__icon}>{icon}</span>
            <div className={styles.contactCard__body}>
              <span className={styles.contactCard__label}>{label}</span>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.contactCard__value}
                >
                  {value}
                </a>
              ) : (
                <span className={styles.contactCard__value}>{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
