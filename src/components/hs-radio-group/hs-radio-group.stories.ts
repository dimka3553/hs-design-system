/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Form elements/Radiogroup',
  argTypes: {
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
  <hs-radio-group direction="${args.direction}">
    <div>
      <hs-input type="radio" itemid="yes" name="choice" value="yes" label="Yes" />
    </div>
    <div>
      <hs-input type="radio" itemid="no" name="choice" value="331313" label="rf" />
    </div>
    <div>
      <hs-input type="radio" itemid="ww" name="choice" value="35353535" label="rf" />
    </div>
    <div>
      <hs-input type="radio" itemid="rr" name="choice" value="65432" label="rf" />
    </div>
      <hs-input type="radio" itemid="frfrfrf" name="choice" value="543" label="frf" />
    </div>
  </hs-radio-group>

`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Radiogroup = Template.bind({});
Radiogroup.args = {
  direction: 'row',
};
