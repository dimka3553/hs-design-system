import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-header',
  styleUrl: 'hs-header.css',
  shadow: false,
})
export class HsHeader {
  @Prop()
  type: '1' | '2' | '3' | '4' | '5' | '6' = '1';

  @Prop()
  color: 'primary' | 'neutral' | 'white' = 'neutral';

  @Prop()
  align: 'left' | 'center' | 'right' | 'justify' = 'left';

  render() {
    const sizes = [3.125, 2.375, 1.75, 1.375, 1, 0.875];

    return (
      <hs-text
        as={`h${this.type}`}
        size={sizes[parseInt(this.type) - 1]}
        weight="500"
        align={this.align}
        color={this.color == 'primary' ? 'primary-500' : this.color == 'white' ? 'white' : 'neutral-900'}
      >
        <slot></slot>
      </hs-text>
    );
  }
}
