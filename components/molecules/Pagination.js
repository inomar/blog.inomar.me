import React, { Component } from 'react';
import HyperLink from '../atoms/HyperLink';

export default class Paginateion extends Component {
  render () {
    const { page, prevPage, nextPage } = this.props;
    return (
      <div className="has-text-centered">
        { 
          prevPage ? (
            <HyperLink type="pagenate" page={ Number(page) - 1 }>
              <a className="p-page__item">Prev</a>
            </HyperLink>
          ): ''
        }
        {
          nextPage ? (
            <HyperLink type="pagenate" page={ Number(page) + 1 }>
              <a className="p_page__item">Next</a>
            </HyperLink>
          ) : ''
        }
      </div>
    )
  }
}