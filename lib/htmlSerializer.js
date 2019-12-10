import Paragraph from '../components/atoms/Paragraph';
import CodeBlock from '../components/atoms/CodeBlock';

export default (contents) => (
  contents.map(content => {
    const { text, type } = content;
    switch(type) {
      case 'paragraph':
        return <Paragraph text={text} />;
      case 'preformatted':
        return <CodeBlock text={text} language={'none'} />;
      default:
        return;
    }
  })
);
