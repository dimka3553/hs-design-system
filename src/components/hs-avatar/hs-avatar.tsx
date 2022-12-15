import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-avatar',
  styleUrl: 'hs-avatar.css',
  shadow: true,
})
export class HsAvatar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
