import React, { ChangeEvent } from "react";

interface Props {
  markdown: string;
  onMarkdownChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor: React.FC<Props> = ({ markdown, onMarkdownChange }) => {
  return (
    <textarea
      id="editor"
      className="w-full p-4 overflow-y-scroll"
      value={markdown}
      onChange={onMarkdownChange}></textarea>
  );
};

export default Editor;
