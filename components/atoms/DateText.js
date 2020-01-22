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

export default ({ date }) => (
  <Time dateTime={date} fontSize={0}>{strDateTo(date)}</Time>
);
