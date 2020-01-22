import styled from 'styled-components';
import { layout, space } from 'styled-system';

const Container = styled.div`
  ${layout}
  ${space}
`;

Container.defaultProps = {
  maxWidth: ['40em', '52em', '64em'],
  width: '100%',
  mx: 'auto',
  my: 0,
  px: [3, 2, 2, 2],
};

export default Container;
