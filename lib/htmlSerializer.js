import Paragraph from '../components/atoms/Paragraph';
import LeadText from '../components/atoms/LeadText';
import CodeBlock from '../components/atoms/CodeBlock';
import List from '../components/atoms/List';

export default (contents) => (
  contents.map(content => {
    const { text, type, spans } = content;
    if (/^heading[123456]$/.test(type)) {
      return <LeadText size={2} text={text} />
    }
    switch(type) {
      case 'paragraph':
        return <Paragraph text={text} spans={spans} />
      case 'preformatted':
        return <CodeBlock text={text} language={'none'} />;
      case 'list-item':
        return <List text={text} />
      default:
        return <div>{text}</div>;
    }
  })
);
