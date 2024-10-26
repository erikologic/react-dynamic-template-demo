import { FunctionComponent } from "react";
import validator from "@rjsf/validator-ajv8";
import { withTheme } from "@rjsf/core";
import { Theme } from "@rjsf/mui";
import { jsonSchema } from "../jsonSchema";
import { getConfig, putConfig } from "../configuration";

const log = (type: any) => console.log.bind(console, type);
const Form = withTheme(Theme);

function saveConf(event: any) {
  putConfig(event.formData);
  window.alert("Reloading page to reflect changes");
  window.location.reload();
}

const FormEditor: FunctionComponent = () => (
  <Form
    formData={getConfig()}
    schema={jsonSchema}
    validator={validator}
    onChange={log("changed")}
    onSubmit={saveConf}
    onError={log("errors")}
  />
);

export default FormEditor;
