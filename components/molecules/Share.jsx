import styled from 'styled-components';
import { space, flexbox } from 'styled-system';

import Title from '../atoms/Title';
import Icon from '../atoms/Icon';
import FBIcon from '../atoms/FBIcon';
import TwitterIcon from '../atoms/TwitterIcon';

const ShareButtons = styled.div`
  display: flex;
  ${flexbox}
`;
const StyledShareWrapper = styled.div`
  ${space}
`;

export default ({ shareUrl, title }) => (
  <StyledShareWrapper mb={4}>
    <Title as="h4" fontSize={2} fontWeight="bold" mb={2}>share</Title>
    <ShareButtons>
      <Icon mr={1}>
        <FBIcon shareUrl={shareUrl} title={title} size={32} />
      </Icon>
      <Icon>
        <TwitterIcon shareUrl={shareUrl} title={title} size={32} />
      </Icon>
    </ShareButtons>
  </StyledShareWrapper>
)