/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Text content/Callout',
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    type: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'radio' },
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-callout type="${args.type}" text="${args.text}"/>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Callout = Template.bind({});
Callout.args = {
  text: 'This is callout text',
  type: 'info',
};
