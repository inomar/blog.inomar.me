import { Row } from 'react-grid-system';
import Prismic from 'prismic-javascript';

import Article from '../components/molecules/Article';
import Pagenation from '../components/molecules/Pagination';
import { postFormatter } from '../lib/formatter';
import Client from '../lib/prismicHelpers';
import Layout from '../components/layouts/Layout';

const Index = props => {
  const { posts, next_page, prev_page, page } = props;
    return (
      <Layout title="">
          {
            posts.length > 0 && posts.map(post => (
                <Article key={post.id} post={post}/>
            ))
          }
        <Row>
          <Pagenation page={page} nextPage={next_page} prevPage={prev_page} />
        </Row>
      </Layout>
    )
}

Index.getInitialProps = ( async ({ req, query }) => {
  const { page } = query;
  let posts = await Client(req).query(
    Prismic.Predicates.at('document.type', 'blogpost'),
    { pageSize : 10, page, orderings : '[document.first_publication_date desc]' }
  )
  const { next_page, prev_page } = posts; 
  const currentPage = posts.page;
  posts = posts.results.map(post => postFormatter(post))
  return {　posts, next_page, prev_page, page: currentPage };
});

export default Index;
