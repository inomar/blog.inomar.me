import Head from 'next/head';
import { Container } from 'react-grid-system';

import Header from './Header';
import Footer from './Footer';
import '../../styles/main.scss';

import { SITE_TITLE } from '../../constants';

export default ({children, title, description }) => {
  const siteTitle = title ? `${title} - ${SITE_TITLE.FULL}` : SITE_TITLE.FULL;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
        <Container>
          { children }
        </Container>
      <Footer />
    </>
  )
}
