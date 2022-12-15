/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Navigation/Sidebar',
  argTypes: {},
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = () => `
  <hs-sidebar >
  <div>  
    <hs-sidebar-link to="#" active="true" icon="house" label="Home">
  </div>
  <div>
    <hs-sidebar-link to="#" active="false" icon="user" label="Students">
  </div>
  <div>
    <hs-sidebar-link to="#" active="false" icon="chalkboard-user" label="Teachers">
  </div>

  
  </hs-sidebar>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Sidebar = Template.bind({});
Sidebar.args = {};
