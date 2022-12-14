import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-paragraph',
  styleUrl: 'hs-paragraph.css',
  shadow: false,
})
export class HsParagraph {
  @Prop()
  type: 'sm' | 'md' | 'lg' = 'sm';

  @Prop()
  color: 'primary' | 'neutral' | 'white' = 'neutral';

  @Prop()
  align: 'left' | 'center' | 'right' | 'justify' = 'left';

  render() {
    let size = 0.75;
    if (this.type == 'md') {
      size = 1;
    } else if (this.type == 'lg') {
      size = 1.375;
    }

    return (
      <hs-text as="p" size={size} weight="400" align={this.align} color={this.color == 'primary' ? 'primary-500' : this.color == 'white' ? 'white' : 'neutral-900'}>
        <slot></slot>
      </hs-text>
    );
  }
}
