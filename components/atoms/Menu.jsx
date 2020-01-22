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
          <LinkWrapper mx={2}>
            <HyperLink type={item.type} key={item.title}>
              {item.title}
            </HyperLink>
          </LinkWrapper>
        ))
      }
    </nav>
  </MenuWrapper>
)