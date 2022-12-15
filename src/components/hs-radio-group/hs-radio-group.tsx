import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-radio-group',
  styleUrl: 'hs-radio-group.css',
  shadow: false,
})
export class HsRadioGroup {
  @Prop() direction: 'col' | 'row' = 'col';
  render() {
    return (
      <hs-stack direction={this.direction} spacing="0.8">
        <slot></slot>
      </hs-stack>
    );
  }
}
