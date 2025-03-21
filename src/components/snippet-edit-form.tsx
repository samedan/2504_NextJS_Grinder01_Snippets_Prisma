"use client";

import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChanges = (value: string = "") => {
    // console.log(value);
    setCode(value);
  };

  // load 'editSnippet' from server and pass STATE values, not form values
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleEditorChanges}
      />
      <form action={editSnippetAction}>
        <button className="p-2 border rounded"> Save</button>
      </form>
    </div>
  );
}
