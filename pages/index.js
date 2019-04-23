import React, { Component } from 'react';

import Layout from '../components/Layout';
import Article from '../components/Article';

export default class Index extends Component {
  render() {
    const tags = [{id: 1, name: 'ruby', color: 'red'}, {id: 2, name: 'Rails', color: 'red'}, {id: 3, name: 'React', color: 'blue'}]
    const articles = [
      {id: 1, title: 'Rubyを学び直しだ', publishedAt: '2019.04.02', tags: tags},
      {id: 2, title: 'Next.jsでブログを作る', publishedAt: '2019.04.02', tags: tags},
      {id: 3, title: 'RailsでAPIモード使う', publishedAt: '2019.04.02', tags: tags},
      {id: 4, title: 'RailsでAPIモード使う', publishedAt: '2019.04.02', tags: tags},
    ];

    return (
      <Layout>
        <div className="container">
          {
            articles && articles.map(article => <Article key={article.id} title={article.title} publishedAt={article.publishedAt} tags={article.tags} />)
          }
        </div>
      </Layout>
    )
  }
}
