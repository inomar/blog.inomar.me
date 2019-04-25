import React, { Component } from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub } from "react-icons/fa";

import { GITHUB_URL, TWITTER_URL } from '../constants';

export default class Header extends Component {
  render() {
    return(
      <header className="p-wrapper__header">
        <div className="container">
          <div className="content has-text-centered">
            <p className="title is-5 p-header__title">
              <Link href="/">
                <a>不定期更新症候群</a>
              </Link>
            </p>
            <p className="subtitle is-6 p-header__subtitle">
              ~ フルスタックエンジニアを目指して ~
            </p>
          </div>
          <div className="has-text-centered">
            <a href={TWITTER_URL} target="_blank" className="p-header__icon"><FaTwitter /></a>
            <a href={GITHUB_URL} target="_blank" className="p-header__icon"><FaGithub /></a>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="is-flex p-header__menu">
                <Link href="/">
                  <a className="p-header__menuItem">
                    HOME
                  </a>
                </Link>
                <Link href="/about">
                  <a className="p-header__menuItem">
                    ABOUT
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
