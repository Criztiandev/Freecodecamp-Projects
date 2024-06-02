/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { marked } from "marked";

interface Props {
  markdown: string;
}

const Preview: FC<Props> = ({ markdown }) => {
  return (
    <div
      id="preview"
      className="w-full border p-4 prose overflow-y-scroll"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { breaks: true }),
      }}></div>
  );
};

export default Preview;
