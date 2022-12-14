/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Typography/Paragraph',
  argTypes: {
    type: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    align: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'neutral', 'white'],
      control: { type: 'radio' },
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-box ${args.color == 'white' && "styles='bg-primary-500 p-2'"}>
    <hs-paragraph type="${args.type}" align="${args.align}" color=${args.color}>
      ${args.text}
    </hs-paragraph>
  </hs-box>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Paragraph = Template.bind({});
Paragraph.args = {
  text: 'This is a paragraph',
  type: '1',
  align: 'left',
  color: 'primary',
};
