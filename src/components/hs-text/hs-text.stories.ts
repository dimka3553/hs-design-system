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
      control: { type: 'number', step:0.0625 },
      
    },
    weight: {
      options: ["400", "500", "700"],
      control: { type: 'radio' },
    },
    color: {
      //prettier-ignore
      options:["black", "primary-50", "primary-100", "primary-300", "primary-400", "primary-500", "primary-600", "primary-700", "primary-900", "primary-800", "white", "neutral-50", "neutral-100", "neutral-200", "neutral-500", "neutral-700", "neutral-900", "success-50", "success-500", "danger-50", "danger-500", "warning-50", "warning-500"],
      control: { type: 'select' },
    },
    align: {
      //prettier-ignore
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'radio' },
    }
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-text as="${args.as}" size="${args.size}" weight="${args.weight}" color="${args.color}" align="${args.align}">
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
  size: 1,
  weight: '400',
  color: "white",
  align: 'left'
};
