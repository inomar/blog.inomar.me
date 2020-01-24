import styled from 'styled-components';
import { typography, space, color, shadow } from 'styled-system'

const Box = styled.div`
  ${typography}
  ${space}
  ${color}
  ${shadow}
  border-radius: 6px;
  box-shadow: 0.7rem 0.7rem 1.6rem 0 rgba(39,94,175,.15);
`;

Box.defaultProps = {
  p: 3,
  bg: 'white',
}
export default Box;