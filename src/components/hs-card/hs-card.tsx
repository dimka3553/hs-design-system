import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: 'hs-card.css',
  shadow: true,
})
export class HsCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
