"use client";

import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useRef, useState } from "react";

export default function CodeEditor() {
  const [value, setValue] = useState<string>("");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    editor.focus();
  }

  return (
    <div>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={value}
        onChange={(value) => setValue(value!)}
        onMount={handleMount}
      />
    </div>
  );
}
