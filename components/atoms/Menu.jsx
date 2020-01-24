import styled from 'styled-components';
import { flexbox, space } from 'styled-system';

import { menu } from '../../constants';
import HyperLink from './HyperLink';

const MenuWrapper = styled.div`
  display: flex;
  ${flexbox}
`;

const LinkWrapper = styled.span`
  ${space}
`;

export default () => (
  <MenuWrapper justifyContent='center'>
    <nav>
      {
        menu && menu.map(item => (
          <LinkWrapper mx={2} key={item.title}>
            <HyperLink type={item.type} key={item.title}>
              <a>{item.title}</a>
            </HyperLink>
          </LinkWrapper>
        ))
      }
    </nav>
  </MenuWrapper>
)