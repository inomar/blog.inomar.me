import styled from 'styled-components';
import { layout, space } from 'styled-system';

const Figure = styled.figure`
  ${layout}
  ${space}
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export default () => (
  <Figure width={128} height={128}>
    <Img src="/inomar_icon_128x128.webp" alt="my profile image" />
  </Figure>
)