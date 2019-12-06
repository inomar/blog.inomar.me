import Paragraph from '../components/atoms/Paragraph';



export default (contents) => (
  contents.map(content => {
    switch(content.type) {
      case 'paragraph':
        if (content.text === '') return <br />;
        return <Paragraph>{content.text}</Paragraph>
      default:
        return null;
    }
  })
);

