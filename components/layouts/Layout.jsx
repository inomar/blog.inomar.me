import Head from 'next/head';

import Container from '../atoms/Container';
import Header from './Header';
import Footer from './Footer';

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
        <Container py={4}>
          { children }
        </Container>
      <Footer />
    </>
  )
}
