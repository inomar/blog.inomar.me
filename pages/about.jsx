import Layout from '../components/layouts/Layout';
import Prismic from 'prismic-javascript';
import { apiEndpoint, accessToken } from '../lib/prismic-configuration';
import HtmlSerializer from '../lib/htmlSerializer';
import Box from '../components/atoms/Box';

const About = ({ doc }) => {
  return (
    <Layout title={'about'}>
      <Box>
        { HtmlSerializer(doc.data.about)}
      </Box>
    </Layout>
  )
}


About.getInitialProps = (async ({ req }) => {
  const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
  const doc = await API.getSingle('profile');
  return { doc };
});

export default About;
