import React, { Component } from 'react';
import Head from 'next/head';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../../components/layouts/Layout';
import Box from '../../components/atoms/Box';
import Tag from '../../components/atoms/Tag';
import { postFormatter } from '../../lib/formatter';
import Client from '../../lib/prismicHelpers';
import HtmlSerializer from '../../lib/htmlSerializer';
import Ogp from '../../lib/ogp';
import { SITE_TITLE, SITE_URL } from '../../constants';

export default class Post extends Component {
  static async getInitialProps({ req, query }) {
    const { uid } = query;
    let post = await Client(req).getByUID('blogpost', uid);
    post = postFormatter(post);
    return {　post };
  }

  render() {
    const { post } = this.props;
    const { title, publishedAt, uid, tags, contents } = post;
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
        <Box>
          <div className="container">
            <div className="p-post">
              <h1 className="p-post__title title is-3">{title}</h1>
              <p className="p-post__date subtitle is-7">{publishedAt}</p>
              <div className="field is-grouped is-grouped-multiline">
                { tags && tags.map(tag => <Tag key={`${uid}-${tag}`} name={tag} color={'blue'} />)}
              </div>
              <div className="p-post">
                { HtmlSerializer(contents) }
              </div>
            </div>
            <div className="p-share">
              <h4 className="p-shareTitle">share</h4>
              <div className="buttons">
                <div className="p-shareButton">
                  <FacebookShareButton url={shareUrl} quote={title} >
                    <FacebookIcon size={32} round/>
                  </FacebookShareButton>
                </div>
                <div className="p-shareButton">
                  <TwitterShareButton url={shareUrl} title={title} >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
            <div className="p-comment">
              <DiscussionEmbed shortname={"bu-ding-qi-geng-xin-zheng-hou-qun"} config={disqusConfig} />
            </div>
          </div>
        </Box>
      </Layout>
    )
  }
}