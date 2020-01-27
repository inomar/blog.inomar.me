import Paragraph from '../components/atoms/Paragraph';
import Title from '../components/atoms/Title';
import CodeBlock from '../components/atoms/CodeBlock';
import Img from '../components/atoms/Img';
import LazyLoadImage from '../components/atoms/LazyLoadImage';

export default (contents) => (
  contents.map((content, index) => {
    const { text, type, spans, url, alt } = content;
    if (/^heading[123456]$/.test(type)) {
      const size = type.replace(/heading/g, '') || 2;
      return <Title as={`h${size}`} fontSize={[3,3,4]}key={index}>{ text }</Title>
    }
    switch(type) {
      case 'paragraph':
        return <Paragraph text={text} spans={spans} key={index} />;
      case 'preformatted':
        return <CodeBlock text={text} language={'none'} key={index} />;
      case 'list-item':
        return <li key={index}>{text}</li>;
      case 'image':
        return <LazyLoadImage key={index}>{ onLoad => ( <Img src={url} alt={alt} onLoad={onLoad} /> )}</LazyLoadImage>;
      default:
        return <div key={index}>{text}</div>;
    }
  })
);
