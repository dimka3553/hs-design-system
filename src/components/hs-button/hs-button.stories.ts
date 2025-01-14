/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Form elements/Button',
  argTypes: {
    type: {
      options: ['text', 'icon'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
    icon: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-button type="${args.type}" color="${args.color}" size="${args.size}" icon="${args.icon}"  disabled="${args.disabled}" loading="${args.loading}">
    ${args.text}
  </hs-button>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Button = Template.bind({});
Button.args = {
  text: 'Button',
  type: 'text',
  color: 'primary',
  size: 'md',
  icon: 'search',
  disabled: false,
  loading: false,
};
