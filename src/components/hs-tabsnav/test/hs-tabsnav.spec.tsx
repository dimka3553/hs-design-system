import { newSpecPage } from '@stencil/core/testing';
import { HsTabsnav } from '../hs-tabsnav';

describe('hs-tabsnav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HsTabsnav],
      html: `<hs-tabsnav></hs-tabsnav>`,
    });
    expect(page.root).toEqualHtml(`
      <hs-tabsnav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hs-tabsnav>
    `);
  });
});
