
import SpaceWrapper from '../atoms/SpaceWrapper';
import Box from '../atoms/Box';
import Title from '../atoms/Title';
import DateText from '../atoms/DateText';
import HyperLink from '../atoms/HyperLink';
import Tags from './Tags';

export default ({ post }) => {
  const { title, publishedRawAt, uid, tags, type } = post;
  return (
    <Box mb={4}>
      <Title as="h2" mb={3}>
        <HyperLink uid={uid} type={type} >
          <a>{title}</a>
        </HyperLink>
      </Title>
      <DateText date={publishedRawAt} />
      <SpaceWrapper mt={2}>
        <Tags tags={tags} id={uid} />
      </SpaceWrapper>
    </Box>
  )
}