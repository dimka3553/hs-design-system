import { Component, h, Prop } from '@stencil/core';
import { Colors } from '../../types';

@Component({
  tag: 'hs-badge',
  styleUrl: 'hs-badge.css',
  shadow: false,
})
export class HsBadge {
  @Prop()
  color: Colors = 'primary-500';
  @Prop()
  size: 'sm' | 'md' | 'lg' = 'md';
  render() {
    let styles;

    switch (this.size) {
      case 'sm':
        styles = 'text-xs px-2 py-1';
        break;
      case 'md':
        styles = 'text-sm px-3 py-1';
        break;
      case 'lg':
        styles = 'text-base px-4 py-2';
        break;
    }

    return (
      <div class={styles + ` flex items-center justify-center text-${this.color} border-${this.color} border-[1px] w-fit rounded-[9999px]`}>
        <slot></slot>
      </div>
    );
  }
}
