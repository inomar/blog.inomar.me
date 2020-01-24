import styled from 'styled-components';
import MicrolinkCard from '@microlink/react';

import Title from './Title';

export default ({text, spans}) => {
  if (text === '') return <br />;
  if (spans.length > 0) {
    const link = spans.find(span => span.type === 'hyperlink');
    if (link) return <MicrolinkCard url={link.data.url} />
  } 
  return (
    <Title as="p" mb={1} fontSize={2} color="text">
      {text}
    </Title>
  )
}
