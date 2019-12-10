import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";

export default class CodeBlock extends Component {
  render() {
    const { language, text } = this.props;
    return (
      <SyntaxHighlighter language={language} style={atomDark} showLineNumbers>
        {text}
      </SyntaxHighlighter>
    )
  }
}
