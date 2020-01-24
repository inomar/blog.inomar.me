import styled from 'styled-components';
import { layout, space } from 'styled-system';

const Container = styled.div`
  ${layout}
  ${space}
`;

Container.defaultProps = {
  maxWidth: ['40em', '52em', '64em'],
  mx: 'auto',
  my: 0,
  px: [2, 2, 2, 3],
};

export default Container;
