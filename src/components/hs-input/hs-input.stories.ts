/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Form elements/Input',
  argTypes: {
    type: {
      options: ['text', 'password', 'radio', 'checkbox', 'textarea'],
      control: { type: 'radio' },
    },
    label: {
      control: { type: 'text' },
    },
    helptext: {
      control: { type: 'text' },
    },
    helptexttype: {
      options: ['error', 'info'],
      control: { type: 'radio' },
    },
    itemid: {
      control: { type: 'text' },
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-input type="${args.type}" label="${args.label}" helptext="${args.helptext}" helptexttype="${args.helptexttype}" itemid="${args.itemid}">

  </hs-input>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Input = Template.bind({});
Input.args = {
  type: 'text',
  label: 'Label',
  helptext: 'Help text',
  helptexttype: 'info',
  itemid: 'input1',
};
