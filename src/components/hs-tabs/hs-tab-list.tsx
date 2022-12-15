import { Component, h } from '@stencil/core';

@Component({
  tag: 'hs-tab-list',
  shadow: false,
})
export class HsTabList {
  render() {
    return (
      <div class="mb-[10px]">
        <div class="flex items-center gap-4 flex-wrap">
          <slot />
        </div>
      </div>
    );
  }
}
