/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Primitives/Text',
  argTypes: {
    as: {
      //prettier-ignore
      options: [
        'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'legend', 'caption', 'blockquote', 'cite', 'code', 'del', 'dfn', 'em', 'i', 'ins', 'kbd', 'mark', 'pre', 'q', 's', 'samp', 'small', 'strong', 'sub', 'sup', 'time', 'u', 'var'
      ],
      control: { type: 'select' },
    },
    size: {
      control: { type: 'number' },
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-text as="${args.as}" >
    ${args.text}
  </hs-text>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Text = Template.bind({});
Text.args = {
  text: 'This is an example of a text component',
  as: 'span',
  size: '1',
};
