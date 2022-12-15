/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Display/Alert',
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-alert color="${args.color}">
    ${args.text}
  </hs-alert>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Alert = Template.bind({});
Alert.args = {
  text: 'This is an alert text',
  color: 'primary',
};
