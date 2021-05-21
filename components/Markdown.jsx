import React from "react";
import Code from "./Code";
import ReactMarkdown from "react-markdown";

const Markdown = (props) => {
  return (
    <div style={{ width: "100%" }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
        }}
        escapeHtml={true}
      />
    </div>
  );
};

export default Markdown;
