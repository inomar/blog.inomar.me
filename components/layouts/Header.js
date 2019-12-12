import React, { Component } from 'react';
import HyperLink from '../atoms/HyperLink';
import { SITE_TITLE } from '../../constants';

export default class Header extends Component {
  render() {
    return(
      <header className="p-wrapper__header">
        <div className="container">
          <div className="content has-text-centered">
            <p className="title is-5 p-header__title">
              <HyperLink>
                <a>{SITE_TITLE.MAIN}</a>
              </HyperLink>
            </p>
            <p className="subtitle is-6 p-header__subtitle">
              {SITE_TITLE.SUB}
            </p>
          </div>
          <div className="is-flex p-header__menu">
            <HyperLink>
              <a className="p-header__menuItem">
                HOME
              </a>
            </HyperLink>
            <HyperLink type='profile'>
              <a className="p-header__menuItem">
                ABOUT
              </a>
            </HyperLink>
          </div>
        </div>
      </header>
    )
  }
}
