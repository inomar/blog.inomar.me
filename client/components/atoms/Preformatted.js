import styled from 'styled-components';
import Prism from 'prismjs';

const Wrap = styled.p`
  margin-bottom: 5px;
`;

export default class Preformatted extends React.Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0);
  }

  render() {
    const { children } = this.props;
    const lang = '';
    return (
      <Wrap>
        <pre className="line-numbers">
          <code className={`language-${lang}`}>
            {children}
          </code>
        </pre>
      </Wrap>
    )
  }
}
