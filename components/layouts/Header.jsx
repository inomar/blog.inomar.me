import styled from 'styled-components';

import Title from '../atoms/Title';
import Container from '../atoms/Container';
import HyperLink from '../atoms/HyperLink';
import Menu from '../atoms/Menu';
import { SITE_TITLE } from '../../constants';

const HeadWrapper = styled.div`
  text-align: center;
`;

export default () => (
  <header>
    <Container>
      <HeadWrapper>
        <Title as="div" mb={2} fontWeight="bold" letterSpacing="0.5rem">
          <HyperLink>
            <a>{SITE_TITLE.MAIN}</a>
          </HyperLink>
        </Title>
        <Title as="div" mb={4} fontSize={2} letterSpacing="0.2rem" color="quaternary">
          {SITE_TITLE.SUB}
        </Title>
      </HeadWrapper>
      <Menu />
    </Container>
  </header>
)
