import { Component, h, State } from '@stencil/core';
import { HsButton } from '../hs-button/hs-button';

@Component({
  tag: 'hs-demo-modal',
  styleUrl: 'hs-modal.css',
})
export class DemoModal {
  @State() open: boolean = false;

  render() {
    const btnProps = {
      size: 'md',
      color: 'primary',
      icon: 'expand',
      type: 'text',
    } as HsButton;

    return (
      <div>
        <div
          onClick={() => {
            this.open = !this.open;
          }}
        >
          <hs-button {...btnProps}>Open Demo Modal</hs-button>
        </div>
        <hs-modal open={this.open}>
          <slot></slot>
        </hs-modal>
      </div>
    );
  }
}
