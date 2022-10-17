import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
    <div className="container">
       <div className="row">
         <div className={clsx('col col--7')}>
           <img src="/img/architecture.png"/>
           <meta property="og:image" content="/img/architecture.png" />
         </div>
         <div className={clsx('col')} style={{marginTop:100}}>
           <h1 className="hero__title">{siteConfig.tagline}</h1>
           <div className={styles.buttons}>
              <Link
                 className="button button--primary button--lg"
                 to="/docs/getting-started/">
                 Getting started
              </Link>
           </div>
         </div>
      </div>
    </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Start your SaaS with ${siteConfig.title}`}
      description="KuberLogic can take a containerized application and turn it into a functional SaaS offering, with integrated billing, monitoring, and customer management within days or even hours.">
      <Head>
        <meta property="og:image" content="/img/architecture.png" />
        <meta name="keywords" content="kubernetes, saas, docker-compose, docker, SaaS tenancy, multi-tenancy, multi-instance, single-tenant, boilerplate, subscription, saas-boilerplate"/>
      </Head>
      <HomepageHeader />
      <main>
    <div className="container" style={{marginTop:25, maxWidth:900}}>
  <h2 className="text--center">What is KuberLogic?</h2>
  <p className="text--center" style={{fontSize:20}}>KuberLogic can take a containerized application and turn it into a functional SaaS offering, with integrated billing, monitoring, and customer management within days or even hours.</p>
     </div>
            <div className="container" style={{marginTop:60}}>
  <h2 className="text--center">Features included</h2>
     </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
