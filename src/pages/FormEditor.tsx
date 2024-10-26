import { FunctionComponent } from "react";
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { withTheme } from '@rjsf/core';
import { Theme } from '@rjsf/mui';

const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = (type: any) => console.log.bind(console, type);
const Form = withTheme(Theme);

const FormEditor: FunctionComponent = () =>
    (
        <Form
          schema={schema}
          validator={validator}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      );
 
export default FormEditor;