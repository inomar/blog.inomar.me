import React, { Component } from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub } from "react-icons/fa";

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
            <a href="" target="_blank"><FaTwitter /></a>
            <a href="" target="_blank"><FaGithub /></a>
          </div>
          <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <nav className="level">
                <p className="level-item has-text-centered">
                  <a href="#">
                  HOME
                  </a>
                </p>
                <p className="level-item has-text-centered">
                  <a href="#">
                  BLOG
                  </a>
                </p>
                <p className="level-item has-text-centered">
                  <a href="#">
                    BOOK
                  </a>
                </p>
                <p className="level-item has-text-centered">
                  <a href="#">
                    ABOUT
                  </a>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
