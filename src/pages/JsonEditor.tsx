import { DiffEditor, Monaco } from "@monaco-editor/react";
import { jsonSchema } from "../jsonSchema";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useRef } from "react";
import { Config, getConfig, putConfig } from "../configuration";
import Ajv from "ajv";

const ajv = new Ajv();
const validate = ajv.compile(jsonSchema);

function parseConfig(blob: string): Config {
  const modifiedConfig = JSON.parse(blob);

  const valid = validate(modifiedConfig);
  if (!valid) {
    const errors = validate.errors
      ?.map(
        (error) =>
          `${error.instancePath} --> ${error.message}: ${JSON.stringify(error.params)}`,
      )
      .join("\n");
    throw new Error(`Invalid config\n: ${errors}`);
  }

  return modifiedConfig as Config;
}
function JsonSchema() {
  const monacoRef = useRef<Monaco | null>(null);

  function handleEditorWillMount(monaco: Monaco) {
    monacoRef.current = monaco;
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: "https://example.com/my-schema.json",
          fileMatch: ["*"],
          schema: jsonSchema,
        },
      ],
    });
  }

  function saveConf() {
    const blob = monacoRef.current?.editor.getModels()[1].getValue()!;
    let modifiedConfig;
    try {
      modifiedConfig = parseConfig(blob);
    } catch (e) {
      window.alert((e as any).message);
      return;
    }
    putConfig(modifiedConfig);
    window.alert("Reloading page to reflect changes");
    window.location.reload();
  }

  function resetConf() {
    putConfig();
    window.alert("Reloading page to reflect changes");
    window.location.reload();
  }

  return (
    <div style={{ height: "85vh" }}>
      <AppBar position="relative" color="default">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            JSON Editor
          </Typography>
          <Button
            variant="contained"
            sx={{ mx: "auto", marginRight: "1rem" }}
            onClick={resetConf}
          >
            Reset
          </Button>
          <Button variant="contained" sx={{ mx: "auto" }} onClick={saveConf}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <DiffEditor
        height="100%"
        original={JSON.stringify(getConfig(), null, 2)}
        modified={JSON.stringify(getConfig(), null, 2)}
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
