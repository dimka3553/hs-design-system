/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Layout/Stack',
  argTypes: {
    spacing: {
      control: { type: 'text' },
    },
    direction: {
      options: ['row', 'col'],
      control: { type: 'radio' },
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-stack spacing="${args.spacing}" direction="${args.direction}">
    <hs-box styles="bg-primary-500 h-[100px] w-[100px] min-h-[100px] min-w-[100px]"></hs-box>
    <hs-box styles="bg-primary-500 h-[100px] w-[100px] min-h-[100px] min-w-[100px]"></hs-box>
    <hs-box styles="bg-primary-500 h-[100px] w-[100px] min-h-[100px] min-w-[100px]"></hs-box>
    <hs-box styles="bg-primary-500 h-[100px] w-[100px] min-h-[100px] min-w-[100px]"></hs-box>
    <hs-box styles="bg-primary-500 h-[100px] w-[100px] min-h-[100px] min-w-[100px]"></hs-box>
  <hs-stack>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Stack = Template.bind({});
Stack.args = {
  direction: 'row',
  spacing: '4',
};
