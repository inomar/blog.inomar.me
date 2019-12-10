import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../lib/prismic-configuration';
import { customLink } from '../../lib/prismicHelpers';

const Paragraph = styled.p`
  margin-bottom: 5px;
`;

export default ({text}) => {
  if (text === '') return <br />;
  return (
    <Paragraph>
      {text}
    </Paragraph>
  )
}
