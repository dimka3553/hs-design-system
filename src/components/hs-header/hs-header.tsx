import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-header',
  styleUrl: 'hs-header.css',
  shadow: true,
})
export class HsHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
