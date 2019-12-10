import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../lib/prismic-configuration';
import { customLink } from '../../lib/prismicHelpers';

const Paragraph = styled.p`
  margin-bottom: 5px;
`;

export default ({children}) => (
  <Paragraph>
    {children}
  </Paragraph>
)
