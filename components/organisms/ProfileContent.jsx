import styled from 'styled-components';
import { space, flexbox, layout } from 'styled-system';

import Figure from '../atoms/Figure';
import Title from '../atoms/Title';

import { FaTwitter, FaGithub } from "react-icons/fa";
import { TWITTER_URL, GITHUB_URL, PROFILE } from '../../constants';

const ProfileContent = styled.div`
  ${flexbox}
  ${space}
  ${layout}
`;

const ProfileWrapper = styled.div`
  ${space}
`;

export default () => (
  <ProfileContent display="flex" alignItems="center">
    <Figure />
    <ProfileWrapper py={2} px={3}>
      <Title as="p" fontSize={2} color="primary">{ PROFILE.NAME }</Title>
      <Title as="p" fontSize={1} color="text">{ PROFILE.POSITION }</Title>
      <ProfileWrapper mb={2}>
        <a href={TWITTER_URL} target="_blank"><FaTwitter /></a>
        <a href={GITHUB_URL} target="_blank"><FaGithub /></a>
      </ProfileWrapper>
      <Title as="p" fontSize={1} color="text">{ PROFILE.DESCRIPTION }</Title>
    </ProfileWrapper>
  </ProfileContent>
)