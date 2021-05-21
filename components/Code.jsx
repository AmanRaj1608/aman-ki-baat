import React from 'react';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";

const SyntaxHighlighter = typeof window === "undefined" ? PrismLight : PrismAsyncLight

const Markdown = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={(language === 'js' ? 'javascript' : language) || 'javascript'}
      style={atomDark}
      showLineNumbers={true}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default Markdown;