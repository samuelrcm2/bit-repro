const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const TJS = require('typescript-json-schema');

const tsconfig = require('../tsconfig.json');

const SCHEMAS_PATH = path.resolve('./src/schemas');

const generateSchema = (generator, component) => {
  const { componentName, typeName, outputSchemaFile } = component;

  try {
    const schema = generator.getSchemaForSymbol(typeName);
    schema.title = componentName;

    fs.writeFileSync(outputSchemaFile, JSON.stringify(schema, null, 2));

    console.log(`${componentName.padEnd(25)} -> OK`);
  } catch (error) {
    console.log(`${componentName.padEnd(25)} -> ${error.message}`);
  }
};

const generateSchemas = (componentsPath, componentNames) => {
  const schemaDirFiles = fs.readdirSync(SCHEMAS_PATH);
  schemaDirFiles.forEach((file) => file.endsWith('.json') && fs.rmSync(path.join(SCHEMAS_PATH, file)));

  const components = componentNames.map((componentName) => {
    const componentNameParts = componentName.split('.');
    const realComponentName = componentNameParts.join('');
    const componentNameOrNamespace = componentNameParts[0];

    return {
      componentName: realComponentName,
      typeName: `${realComponentName}Props`,
      typeFile: path.join(componentsPath, componentNameOrNamespace, 'types.ts'),
      outputSchemaFile: path.join(SCHEMAS_PATH, `${realComponentName}.json`),
    };
  });

  const program = TJS.getProgramFromFiles(
    components.map(({ typeFile }) => typeFile),
    tsconfig.compilerOptions,
  );

  const generator = TJS.buildGenerator(program, {
    ref: false,
    required: true,
    noExtraProps: true,
  });

  components.forEach((component) => generateSchema(generator, component));
};

(() => {
  console.log('\nGenerating schemas...\n');

  let componentsPath = path.resolve('./src/v2/components');
  let componentNames = [
    'Alert',
    'AutoComplete',
    'Badge',
    'Button',
    'Button.Cancel',
    'Button.Delete',
    'Button.Edit',
    'Button.New',
    'Button.Reset',
    'Button.Save',
    'Card',
    'Card.Grid',
    //'Card.EditItem',
    //'Card.NewItem',
    'CardList',
    'Checkbox',
    'Checkbox.Group',
    'Collapse',
    'Collapse.Panel',
    'ColorPicker',
    'CompositeField',
    'Container',
    //'DataTable',
    'DatePicker',
    'DatePicker.DateTime',
    'DatePicker.Month',
    'DatePicker.Range',
    'DatePicker.Week',
    'DatePicker.Year',
    'Divider',
    'Dropdown',
    'Dropdown.Button',
    'Empty',
    'Field',
    'Form',
    'FormField',
    'GridView',
    'Icon',
    'IconPicker',
    'Image',
    //'JsonField',
    'List',
    'List.Item',
    'List.Item.Meta',
    'Modal',
    'NumberInput',
    'NumberInput.Double',
    'NumberInput.Integer',
    'Pagination',
    'Popover',
    'Progress',
    'Radio',
    'Radio.Group',
    'ResizableSider',
    'Result',
    'ScrollableArea',
    'Search',
    'Secure',
    'Select',
    'Select.Option',
    'Select.OptGroup',
    'Skeleton',
    'Skeleton.Avatar',
    'Skeleton.Button',
    'Skeleton.Image',
    'Skeleton.Input',
    'Slider',
    'Space',
    'Spin',
    'Split',
    'Split.Panel',
    'Steps',
    'Steps.Step',
    'Switch',
    'Tabs',
    'Tabs.Pane',
    'Tag',
    'Text',
    'TextInput',
    'TextInput.Email',
    'TextInput.Password',
    'TextInput.TextArea',
    'TimePicker',
    'TimePicker.Range',
    'Tooltip',
    'Transfer',
    'TranslatedText',
    'Tree',
    'TreeSelect',
    'TreeSelect.TreeNode',
    'Upload',
    'Widget',
  ];

  generateSchemas(componentsPath, componentNames);

  console.log('\nSchemas was generated successfully!\n');
})();
