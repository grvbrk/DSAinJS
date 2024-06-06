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

  function showValue() {
    if (editorRef.current) {
      setValue(editorRef.current.getValue());
    }
  }

  return (
    <div>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={value}
        onChange={(value) => setValue(value!)}
        onMount={handleMount}
      />
      <h1>{value}</h1>
    </div>
  );
}
