export default {
  title: 'Components/Navigation/Tabs',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    selectedIndex: {
      options: [0, 1, 2, 3],
      control: { type: 'select' },
      description: 'Tab selected by default',
    },
  },
};

const Template = args => `
  <hs-tabs selected-index="${args.selectedIndex}">
    <hs-tab-list>
      <hs-tab>Amazing Tab 1</hs-tab>
      <hs-tab>Amazing Tab 2</hs-tab>
      <hs-tab>Amazing Tab 3</hs-tab>
      <hs-tab>Amazing Tab 4</hs-tab>
      <hs-tab>Amazing Tab 5</hs-tab>
    </hs-tab-list>
    <hs-tab-panels>
      <hs-tab-panel>
        <hs-header type="2">Tab 1</hs-header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header type="2">Tab 2</hs-header>
        <p>Sed erat nulla, vulputate in turpis quis, dignissim vestibulum magna. Aliquam eleifend mauris id vulputate sollicitudin. </p>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header type="2">Tab 3</hs-header>
        <p>Morbi gravida lobortis metus ac feugiat. Aliquam ut lacinia lacus. Morbi ullamcorper venenatis dui vel maximus. In malesuada tortor ligula</p>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header type="2">Tab 4</hs-header>
        <p>Vivamus vestibulum nisl congue mattis pretium. Aenean lacinia nibh at pharetra blandit. </p>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header type="2">Tab 5</hs-header>
        <p>Integer non est porta, malesuada neque quis, rutrum orci. Sed tempus metus sed nisi tempor, in condimentum tellus rutrum.</p>
      </hs-tab-panel>
    </hs-tab-panels>
  </hs-tabs>
`;

export const Tabs = Template.bind({});
Tabs.args = {
  selectedIndex: 0,
};
