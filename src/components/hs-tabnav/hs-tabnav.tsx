import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-tabnav',
  styleUrl: 'hs-tabnav.css',
  shadow: true,
})
export class HsTabnav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
