import styled from 'styled-components';
import { color, typography } from 'styled-system';

import { strDateTo, htmlDateTo } from '../../lib/utility';


const getColor = ({ theme }) => `
  color: ${theme.colors.text};
`;


const Time = styled.time`
  ${getColor}
  ${color}
  ${typography}
`;

Time.defaultProps = {
  fontSize: 1,
}

export default ({ date, size = 1 }) => (
  <Time dateTime={date} fontSize={size}>{strDateTo(date)}</Time>
);
