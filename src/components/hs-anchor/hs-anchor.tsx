import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-anchor',
  styleUrl: 'hs-anchor.css',
  shadow: false,
})
export class HsAnchor {
  @Prop() to: string;

  render() {
    //if to leads to a page on a different domain, open in new tab
    let target = '_self';
    if (this.to.includes('http')) {
      target = '_blank';
    }

    return (
      <a href={this.to} target={target}>
        <span class={`text-[1rem] flex items-center gap-1 text-primary-500 p-1 px-3 rounded-[4px] w-fit hover:bg-primary-50`}>
          <slot></slot>
          {target === '_blank' ? (
            <svg width={`1rem`} height={`1rem`} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 1.5C5.27614 1.5 5.5 1.27614 5.5 1C5.5 0.723858 5.27614 0.5 5 0.5V1.5ZM9.5 5C9.5 4.72386 9.27614 4.5 9 4.5C8.72386 4.5 8.5 4.72386 8.5 5H9.5ZM4.14645 5.14645C3.95118 5.34171 3.95118 5.65829 4.14645 5.85355C4.34171 6.04882 4.65829 6.04882 4.85355 5.85355L4.14645 5.14645ZM5 0.5H1.2V1.5H5V0.5ZM0.5 1.2V8.8H1.5V1.2H0.5ZM1.2 9.5H8.8V8.5H1.2V9.5ZM9.5 8.8V5H8.5V8.8H9.5ZM4.85355 5.85355L9.35355 1.35355L8.64645 0.646447L4.14645 5.14645L4.85355 5.85355ZM8.8 9.5C9.1866 9.5 9.5 9.1866 9.5 8.8H8.5C8.5 8.63432 8.63431 8.5 8.8 8.5V9.5ZM0.5 8.8C0.5 9.1866 0.813401 9.5 1.2 9.5V8.5C1.36568 8.5 1.5 8.63431 1.5 8.8H0.5ZM1.2 0.5C0.813401 0.5 0.5 0.813401 0.5 1.2H1.5C1.5 1.36569 1.36569 1.5 1.2 1.5V0.5Z"
                fill="var(--hs-color-primary-500)"
              />
              <path d="M6.5 1H8.8C8.91046 1 9 1.08954 9 1.2V3.5" stroke="var(--hs-color-primary-500)" stroke-linecap="round" />
            </svg>
          ) : null}
        </span>
      </a>
    );
  }
}
