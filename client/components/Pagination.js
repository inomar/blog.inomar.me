import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default class Paginateion extends Component {
  render () {
    const { count, page, limit } = this.props;
    return (
      <div className="has-text-centered">
        { 
          page && page > 1 ? (
            <Link as={`/?page=${page - 1}`} href={`/posts?page=${page - 1}`}>
              <a className="p-page__item">Prev</a>
            </Link>
          ): ''
        }
        {
          page && page*limit < count ? (
            <Link as={`/?page=${page + 1}`} href={`/posts?page=${page + 1}`}>
              <a className="p_page__item">Next</a>
            </Link>
          ) : ''
        }
      </div>
    )
  }
}