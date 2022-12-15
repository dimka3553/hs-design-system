import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-tabsnav',
  styleUrl: 'hs-tabsnav.css',
  shadow: true,
})
export class HsTabsnav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
