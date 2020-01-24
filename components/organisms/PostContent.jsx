import SpaceWrapper from '../atoms/SpaceWrapper';
import Title from '../atoms/Title';
import DateText from '../atoms/DateText';
import StyledPost from '../atoms/StyledPost';
import Tags from '../molecules/Tags';
import HtmlSerializer from '../../lib/htmlSerializer';


export default ({ title, publishedRawAt, tags, uid, contents }) => (
  <>
    <Title fontSize={[3,4,5]} mb={4}>{title}</Title>
    <DateText date={publishedRawAt} size={1} />
    <SpaceWrapper mt={2}>
      <Tags tags={tags} id={uid} />
    </SpaceWrapper>
    <StyledPost py={5}>
      { HtmlSerializer(contents) }
    </StyledPost>
  </>
)