import styled from "styled-components";
import { typography, color, space } from 'styled-system';

const Title = styled.h1`
  ${typography}
  ${color}
  ${space}
`;

Title.defaultProps = {
  fontSize: 3,
  color: 'primary',
};

export default Title;
