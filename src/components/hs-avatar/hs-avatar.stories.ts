/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  title: 'Components/Display/Avatar',
  argTypes: {
    image: {
      control: { type: 'text' },
    },
    countryimage: {
      control: { type: 'text' },
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
  <div class="h-[${args.size}px] w-[${args.size}px] relative">
    <hs-avatar image="${args.image}" countryimage="${args.countryimage}"/>
  </div>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Avatar = Template.bind({});
Avatar.args = {
  image: 'https://thispersondoesnotexist.com/image',
  countryimage: 'https://thisartworkdoesnotexist.com/',
  size: 200,
};
