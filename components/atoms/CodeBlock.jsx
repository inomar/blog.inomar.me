import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";

export default ({ language, text }) => (
  <SyntaxHighlighter language={language} style={atomDark} showLineNumbers>
    {text}
  </SyntaxHighlighter>
)
