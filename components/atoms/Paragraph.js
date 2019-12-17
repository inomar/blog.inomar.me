import styled from 'styled-components';
import LinkCard from '../atoms/LinkCard';

const Paragraph = styled.p`
  margin-bottom: 5px;
`;

export default ({text, spans}) => {
  if (text === '') return <br />;
  if (spans.length > 0) {
    const link = spans.find(span => span.type === 'hyperlink');
    if (link) return <LinkCard href={link.data.url} />
  } 
  return (
    <Paragraph>
      {text}
    </Paragraph>
  )
}
