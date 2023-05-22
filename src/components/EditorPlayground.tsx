import { Editor } from "@avp1598/react-beautiful-editor";
import React, { useState } from "react";

type Props = {};

const EditorPlayground = (props: Props) => {
  const [description, setDescription] = useState("");

  const onSave = () => {
    console.log("description", description);
  };

  const theme = "dark";
  return (
    <Editor
      value={description}
      onChange={(value) => {
        setDescription(value);
      }}
      theme={theme}
      uploadImage={async (file) => {
        console.log("file", file);
        return "https://picsum.photos/400/600";
      }}
      placeholder="Start by typing / to explore the available commands"
      onBlur={onSave}
      readonly={false}
    />
  );
};

export default EditorPlayground;
