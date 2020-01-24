import Paragraph from '../components/atoms/Paragraph';
import LeadText from '../components/atoms/LeadText';
import CodeBlock from '../components/atoms/CodeBlock';
import List from '../components/atoms/List';

export default (contents) => (
  contents.map((content, index) => {
    const { text, type, spans } = content;
    if (/^heading[123456]$/.test(type)) {
      return <LeadText size={2} text={text} key={index} />
    }
    switch(type) {
      case 'paragraph':
        return <Paragraph text={text} spans={spans} key={index} />
      case 'preformatted':
        return <CodeBlock text={text} language={'none'} key={index} />;
      case 'list-item':
        return <List text={text} key={index} />
      default:
        return <div key={index}>{text}</div>;
    }
  })
);
