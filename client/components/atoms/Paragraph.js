import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 5px;
`;

export default ({children}) => (
  <Paragraph>{children}</Paragraph>
)
