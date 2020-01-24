import Head from 'next/head';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../../components/layouts/Layout';
import Box from '../../components/atoms/Box';
import PostContent from '../../components/organisms/PostContent';
import Share from '../../components/molecules/Share';
import { postFormatter } from '../../lib/formatter';
import Client from '../../lib/prismicHelpers';
import Ogp from '../../lib/ogp';
import { SITE_TITLE, SITE_URL } from '../../constants';

export default class Post extends React.Component {
  static async getInitialProps({ req, query }) {
    const { uid } = query;
    let post = await Client(req).getByUID('blogpost', uid);
    post = postFormatter(post);
    return {　post };
  }

  render() {
    const { post } = this.props;
    const { title, publishedRawAt, uid, tags, contents } = post;
    const shareUrl = `${SITE_URL}/posts/${uid}`;
    const headTitle = `${title} - ${SITE_TITLE.FULL}`;
    const disqusConfig = {
      url: shareUrl,
      identifier: uid,
      title: headTitle,
    };
    return(
      <Layout>
        <Head>
          <Ogp title={title} url={shareUrl} isTop={false} />
        </Head>
        <Box px={4}>
          <PostContent uid={uid} title={title} tags={tags} publishedRawAt={publishedRawAt} contents={contents} />
          <Share shareUrl={shareUrl} title={title}/>
          <DiscussionEmbed shortname={"bu-ding-qi-geng-xin-zheng-hou-qun"} config={disqusConfig} />
        </Box>
      </Layout>
    )
  }
}