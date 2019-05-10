import React, { Component } from 'react';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import ReactMarkDown from 'react-markdown';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../components/Layout';
import Tag from '../components/Tag';
import CodeBlock from '../components/CodeBlock';
import LinkCard from '../components/LinkCard';
import { strDateTo } from '../modules/utility';
import { ENDPOINT } from '../constants';

export default class Post extends Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`${ENDPOINT}/posts/${id}`);
    const post = await res.json();
    return { post }
  }
  render() {
    const { post } = this.props;
    const publishedDate = strDateTo(post.publishedAt)
    const shareUrl = `https://blog.inomar.me/post/${post._id}`;
    const title = `${post.title} - 不定期更新症候群~フルスタックエンジニアを目指して~`;
    const disqusConfig = {
      url: shareUrl,
      identifier: post._id,
      title: post.title,
    };
    return(
      <Layout>
        <Head>
          <title>{title}</title>
          <meta name="description" content={post.body.slice(0, 30)} />
        </Head>
        <section className="section">
          <div className="container">
            <div className="box p-post">
              <h1 className="p-post__title title is-3">{post.title}</h1>
              <p className="p-post__date subtitle is-7">{publishedDate}</p>
              <div className="field is-grouped is-grouped-multiline">
                { post.tag && post.tag.map(tag => <Tag key={tag._id} name={tag.name} color={tag.color} />)}
              </div>
              <div className="p-post">
                <ReactMarkDown
                  source={post.body}
                  escapeHtml={false}
                  renderers={{ code: CodeBlock, link: LinkCard }}
                  linkTarget={'_blank'}
                />
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
              <DiscussionEmbed shortname={"不定期更新症候群"} config={disqusConfig} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}