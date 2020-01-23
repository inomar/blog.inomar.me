import styled from 'styled-components';
import { space, color } from 'styled-system';

import Container from '../atoms/Container';
import ProfileContent from '../organisms/ProfileContent';
import Copyright from '../atoms/Copyright';


const Footer = styled.footer`
  ${space}
  ${color}
`;

export default () => (
  <>
    <Footer bg="surface" py={4}>
      <Container maxWidth={620}>
        <ProfileContent />
      </Container>
      <Copyright />
    </Footer>
  </>
)