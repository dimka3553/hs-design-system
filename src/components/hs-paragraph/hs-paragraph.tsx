import { Component, h } from '@stencil/core';

@Component({
  tag: 'hs-paragraph',
  styleUrl: 'hs-paragraph.css',
  shadow: false,
})
export class HsParagraph {
  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }
}
