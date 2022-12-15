import { Component, h, Prop } from '@stencil/core';
import { HsButton } from '../hs-button/hs-button';
@Component({
  tag: 'hs-pagination',
  styleUrl: 'hs-pagination.css',
  shadow: false,
})
export class HsPagination {
  @Prop()
  currentPage: number = 1;
  @Prop()
  totalPages: number = 5;

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
            if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
          }}
        >
          <hs-button {...leftButtonProps}>back</hs-button>
        </div>
        <div class="flex items-center gap-2">
          <div class=" flex items-center justify-center text-primary-500 rounded-md border-neutral-200 border-[1px] h-[26px] w-[26px]">{this.currentPage}</div>
          <span>of</span>
          <div>{this.totalPages}</div>
        </div>
        <div
          onClick={() => {
            if (this.currentPage < this.totalPages) this.currentPage = this.currentPage + 1;
          }}
        >
          <hs-button {...rightButtonProps}>next</hs-button>
        </div>
      </div>
    );
  }
}
