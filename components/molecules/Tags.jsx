import styled from 'styled-components';
import { space } from 'styled-system';

import Tag from '../atoms/Tag';

const TagsWrapper = styled.div`
  ${space};
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
`;

export default ({ tags, id }) => (
  <TagsWrapper mt={1}>
    {
      tags && tags.map(tag => (
        <Tag key={`${id}-${tag}`} name={tag} color="blue" />
      ))
    }
  </TagsWrapper>
);
