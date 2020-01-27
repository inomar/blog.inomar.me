import styled from 'styled-components';
import { layout, space } from 'styled-system';

const Img = styled.img`
  ${space}
  ${layout}
`;

Img.defaultProps = {
  width: '100%',
};


export default Img;
