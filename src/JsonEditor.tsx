import React from 'react';
import { DiffEditor, Monaco } from '@monaco-editor/react';

function JsonSchema() {
  const originalCode = `{
    "name": "John",
    "age": 25,
    "email": "john.doe@example.com"
  }`;
  
  const modifiedCode = `{
    "name": "Jane",
    "age": -5,
    "email": "jane.doe"
  }`;

  const jsonSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Example Schema",
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "integer", minimum: 0 },
      email: { type: "string", format: "email" }
    },
    required: ["name", "age"]
  };

  function handleEditorWillMount(monaco: Monaco) {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: "https://example.com/my-schema.json",
          fileMatch: ["*"],
          schema: jsonSchema
        }
      ]
    });
  }

  return (
    <div style={{ height: '90vh' }}>
      <DiffEditor
        height="100%"
        original={originalCode}
        modified={modifiedCode}
        language="json"
        theme="vs-dark"
        beforeMount={handleEditorWillMount}
        options={{
          renderSideBySide: true,
          readOnly: false,
          glyphMargin: true

        }}
      />
    </div>
  );
}

export default JsonSchema;
