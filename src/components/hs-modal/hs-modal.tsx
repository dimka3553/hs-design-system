import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-modal',
  styleUrl: 'hs-modal.css',
  shadow: false,
})
export class HsModal {
  @Prop()
  open: boolean = false;

  @Prop()
  modaltitle: string = 'Modal Title';

  render() {
    return (
      <div>
        <div
          class={'fixed top-0 left-0 w-full h-full bg-overlay transition-[0.2s] ' + (this.open ? ' visible opacity-[1]  z-[100]' : 'invisible opacity-[0] z-[-10]')}
          onClick={() => {
            this.open = false;
          }}
        ></div>
        <div
          class={
            'left-[50%] bottom-[50%] translate-x-[-50%]  bg-white w-full max-w-[400px] fixed transition-[0.3s] rounded-[8px] ' +
            (this.open ? ' visible opacity-[1] z-[101] translate-y-[50%] ' : ' invisible opacity-[0] z-[-10] translate-y-[170%]')
          }
        >
          <div class="h-[60px] w-full flex justify-between items-center border-b-neutral-200 border-b-[1px] px-4">
            <div>
              <hs-header type="5" color="neutral">
                {this.modaltitle}
              </hs-header>
            </div>
            <div class="w-[20px] h-[20px] cursor-pointer flex items-center justify-center" onClick={() => (this.open = !this.open)}>
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.70807 4.5L9.29693 0.22207C9.35709 0.150977 9.30651 0.0429688 9.21354 0.0429688H8.12252C8.05826 0.0429688 7.99674 0.0716796 7.95436 0.120898L4.9944 3.64961L2.03444 0.120898C1.99342 0.0716796 1.9319 0.0429688 1.86627 0.0429688H0.775256C0.682287 0.0429688 0.631701 0.150977 0.691858 0.22207L4.28072 4.5L0.691858 8.77793C0.678382 8.79378 0.669737 8.81316 0.666948 8.83377C0.66416 8.85438 0.667345 8.87537 0.676126 8.89422C0.684907 8.91308 0.698915 8.92902 0.716486 8.94016C0.734058 8.95129 0.754455 8.95715 0.775256 8.95703H1.86627C1.93053 8.95703 1.99205 8.92832 2.03444 8.8791L4.9944 5.35039L7.95436 8.8791C7.99537 8.92832 8.0569 8.95703 8.12252 8.95703H9.21354C9.30651 8.95703 9.35709 8.84902 9.29693 8.77793L5.70807 4.5Z"
                  fill="#999999"
                />
              </svg>
            </div>
          </div>
          <div class="p-[20px]">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
