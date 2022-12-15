import { Component, h, Prop } from '@stencil/core';
import { HsButton } from '../hs-button/hs-button';
@Component({
  tag: 'hs-pagination',
  styleUrl: 'hs-pagination.css',
  shadow: false,
})
export class HsPagination {
  @Prop()
  currentpage: number = 1;
  @Prop()
  totalpages: number = 5;

  render() {
    const leftButtonProps = {
      size: 'sm',
      color: 'secondary',
      icon: 'chevron-left',
      type: 'icon',
    } as HsButton;
    const rightButtonProps = {
      size: 'sm',
      color: 'secondary',
      icon: 'chevron-right',
      type: 'icon',
    } as HsButton;
    return (
      <div class="flex items-center gap-6">
        <div
          onClick={() => {
            if (this.currentpage > 1) this.currentpage = this.currentpage - 1;
          }}
        >
          <hs-button {...leftButtonProps}>back</hs-button>
        </div>
        <div class="flex items-center gap-2">
          <div class=" flex items-center justify-center text-primary-500 rounded-md border-neutral-200 border-[1px] h-[26px] px-[8px]">{this.currentpage}</div>
          <span>of</span>
          <div>{this.totalpages}</div>
        </div>
        <div
          onClick={() => {
            if (this.currentpage < this.totalpages) this.currentpage = this.currentpage + 1;
          }}
        >
          <hs-button {...rightButtonProps}>next</hs-button>
        </div>
      </div>
    );
  }
}
