import Paragraph from '../components/atoms/Paragraph';
import Preformatted from '../components/atoms/Preformatted';

export default (contents) => (
  contents.map(content => {
    console.log(content)
    switch(content.type) {
      case 'paragraph':
        if (content.text === '') return <br />;
        return <Paragraph>{content.text}</Paragraph>;
      case 'preformatted':
        return <Preformatted>{content.text}</Preformatted>
      default:
        return null;
    }
  })
);
