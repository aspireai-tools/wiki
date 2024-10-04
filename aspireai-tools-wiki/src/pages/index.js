import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            Explore Our Tools
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureList() {
  return [
    {
      title: 'AI-Powered Solutions',
      description: (
        <>
          Our tools leverage cutting-edge AI technology to enhance your development workflow and improve project outcomes.
        </>
      ),
    },
    {
      title: 'Easy Integration',
      description: (
        <>
          Seamlessly integrate Aspire AI Tools into your existing projects with our comprehensive documentation and support.
        </>
      ),
    },
    {
      title: 'Continuous Innovation',
      description: (
        <>
          Stay ahead of the curve with our constantly evolving suite of AI tools, designed to meet the changing needs of developers.
        </>
      ),
    },
  ];
}

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation and Tools for AI Solutions">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList().map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}