import styled from 'styled-components';
import { space } from 'styled-system';

import Title from '../atoms/Title';
import Container from '../atoms/Container';
import HyperLink from '../atoms/HyperLink';
import Menu from '../atoms/Menu';
import { SITE_TITLE } from '../../constants';

const HeadWrapper = styled.div`
  ${space}
  text-align: center;

`;

export default () => (
  <header>
    <Container>
      <HeadWrapper mt={4}>
        <Title as="div" mb={2} fontWeight="bold" letterSpacing="0.5rem">
          <HyperLink>
            <a>{SITE_TITLE.MAIN}</a>
          </HyperLink>
        </Title>
        <Title as="div" fontSize={2} letterSpacing="0.2rem" color="quaternary">
          {SITE_TITLE.SUB}
        </Title>
      </HeadWrapper>
      <HeadWrapper mt={4}>
        <Menu />
      </HeadWrapper>
    </Container>
  </header>
)
