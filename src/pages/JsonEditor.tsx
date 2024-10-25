import { DiffEditor, Monaco } from '@monaco-editor/react';
import { configuration } from '../configuration';
import { jsonSchema } from '../jsonSchema';

function JsonSchema() {
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
        original={JSON.stringify(configuration, null, 2)}
        modified={JSON.stringify(configuration, null, 2)}
        language="json"
        theme="vs-dark"
        beforeMount={handleEditorWillMount}
        options={{
          renderSideBySide: true,
          readOnly: false,
          glyphMargin: true,
          quickSuggestions: true,
        }}
      />
    </div>
  );
}

export default JsonSchema;
