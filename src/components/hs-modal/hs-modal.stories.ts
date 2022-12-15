/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Overlay/Modal',
  argTypes: {
    code: { control: 'text' },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-demo-modal>
    ${args.code}
  </hs-demo-modal>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Modal = Template.bind({});
Modal.args = {
  code: "<div class='bg-primary-50 text-primary-500 border-[2px] border-primary-500 h-[200px] flex items-center justify-center' >Slot component</div>",
};
