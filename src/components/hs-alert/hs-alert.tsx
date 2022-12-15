import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'hs-alert',
  styleUrl: 'hs-alert.css',
  shadow: false,
})
export class HsAlert {
  @Prop() color: 'primary' | 'secondary' = 'primary';

  @State() show: boolean = true;

  render() {
    let styles;
    let col;

    switch (this.color) {
      case 'primary':
        styles = 'bg-primary-700 text-white';
        col = 'var(--hs-color-white)';

        break;
      case 'secondary':
        styles = 'bg-primary-50 text-primary-700';
        col = 'var(--hs-color-primary-700)';
        break;
    }

    return (
      <div class={(!this.show ? ' hidden ' : ' block ') + styles + ' flex items-center justify-between p-2 px-4 gap-3 '}>
        <span>
          <slot></slot>
        </span>
        <div class="w-[20px] h-[20px] cursor-pointer flex items-center justify-center" onClick={() => (this.show = !this.show)}>
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.70807 4.5L9.29693 0.22207C9.35709 0.150977 9.30651 0.0429688 9.21354 0.0429688H8.12252C8.05826 0.0429688 7.99674 0.0716796 7.95436 0.120898L4.9944 3.64961L2.03444 0.120898C1.99342 0.0716796 1.9319 0.0429688 1.86627 0.0429688H0.775256C0.682287 0.0429688 0.631701 0.150977 0.691858 0.22207L4.28072 4.5L0.691858 8.77793C0.678382 8.79378 0.669737 8.81316 0.666948 8.83377C0.66416 8.85438 0.667345 8.87537 0.676126 8.89422C0.684907 8.91308 0.698915 8.92902 0.716486 8.94016C0.734058 8.95129 0.754455 8.95715 0.775256 8.95703H1.86627C1.93053 8.95703 1.99205 8.92832 2.03444 8.8791L4.9944 5.35039L7.95436 8.8791C7.99537 8.92832 8.0569 8.95703 8.12252 8.95703H9.21354C9.30651 8.95703 9.35709 8.84902 9.29693 8.77793L5.70807 4.5Z"
              fill={col}
            />
          </svg>
        </div>
      </div>
    );
  }
}
