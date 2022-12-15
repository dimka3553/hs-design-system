/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Display/Card',
  argTypes: {
    text: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <hs-card title="${args.title}" subtitle="${args.subtitle}" image="${args.image}">
    ${args.text}
  </hs-card>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Card = Template.bind({});
Card.args = {
  text: 'How two students are taking their machine learning-based startup to CERN’s Entrepreneurship Program…',
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  image: 'https://thisartworkdoesnotexist.com/',
};
