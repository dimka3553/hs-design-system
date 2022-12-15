import { newE2EPage } from '@stencil/core/testing';

describe('hs-tabsnav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hs-tabsnav></hs-tabsnav>');

    const element = await page.find('hs-tabsnav');
    expect(element).toHaveClass('hydrated');
  });
});
