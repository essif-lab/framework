import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function CustomFeature() {
  const flagUrl = useBaseUrl('images/EU-flag.jpg');
  const logoUrl = useBaseUrl('images/eSSIF-Lab logo.png');
  const title = 'Horizon 2020';
  const description =
    ' Funded by the European Commission, as part of the Horizon 2020 Research and Innovation Programme under grant agreement Nº 871932.';

  return (
    <div
      className={classnames(
        'col col--6  col--offset-3',
        styles.feature,
        styles.centered,
      )}>
      <div className={styles.featuredImages}>
        <img src={flagUrl} alt="Horizon 2020" />
        <img src={logoUrl} alt="eSSIF-Lab logo" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/project')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <CustomFeature />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
