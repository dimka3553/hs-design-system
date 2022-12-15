import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-stack',
  styleUrl: 'hs-stack.css',
  shadow: false,
})
export class HsStack {
  @Prop() spacing: string = '0';
  @Prop() direction: 'col' | 'row' = 'col';

  render() {
    return (
      <hs-box as="div" styles={`flex gap-[${this.spacing}rem] flex-${this.direction}`}>
        <slot></slot>
      </hs-box>
    );
  }
}
