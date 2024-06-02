import { ChangeEvent, useCallback, useState } from "react";
import Editor from "./components/layout/Editor";
import Preview from "./components/layout/Preview";
import Explorer from "./components/layout/Explorer";

const App = () => {
  const [markdown, setMarkdown] =
    useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Here is some code of mine, \`<div></div>\`, between 2 backticks. Important for later #React!
  
  **bold**... whoa! is fabulous!
  Or _italic_. _Forza Italia!_
  Or... wait for it... **_both!_**
  **Errors?** ~~cross them out~~.
  
  [links](https://www.freecodecamp.org), and
  > Block Quotes! are provided too!
  
  tables, here they are:
  
  Header1 | Header2 | Header3?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course, there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  \`\`\`
  Some code block
  \`\`\`
  `);

  const handleMarkdownChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const target = event.target.value;
      setMarkdown(target);
    },
    [setMarkdown]
  );

  return (
    <div className="h-screen overflow-hidden">
      <Explorer />
      <div className="h-screen pt-[58px] flex">
        <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
