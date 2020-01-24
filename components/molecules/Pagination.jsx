import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import HyperLink from '../atoms/HyperLink';

const Pagination = styled.div`
  ${layout}
  ${flexbox}
  margin: 0 auto;
`;

const PaginationLink = styled.span`
  ${space}
`;



export default ({ page, prevPage, nextPage }) => (
  <Pagination display="flex" justifyContent='center' >
    { 
      prevPage ? (
        <PaginationLink px={3} >
          <HyperLink type="pagenate" page={ Number(page) - 1 }>
            <a className="p-page__item">Prev</a>
          </HyperLink>
        </PaginationLink>
      ): ''
    }
    {
      nextPage ? (
        <PaginationLink px={3} >
          <HyperLink type="pagenate" page={ Number(page) + 1 }>
            <a className="p_page__item">Next</a>
          </HyperLink>
        </PaginationLink>
      ) : ''
    }
  </Pagination>
)