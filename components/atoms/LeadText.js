import styled from 'styled-components';

const Heading1 = styled.h1`
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const Heading3 = styled.h3``;

const Heading4 = styled.h4``;

export default ({size, text}) => {
  const heading = (size, text) => {
    switch(size) {
      case 1:
        return <Heading1>{text}</Heading1>
      case 2:
        return <Heading2>{text}</Heading2>
      case '3':
        return <Heading3>{text}</Heading3>;
      case '4':
      case '5':
      case '6':
      default:
        return <Heading3>{text}</Heading3>
    }
  }
  return heading(size, text)
};
