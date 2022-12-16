import { Component, Element, h, Host, Method, Prop } from '@stencil/core';

@Component({
  tag: 'hs-tab-panel',
  shadow: true,
})
export class HsTabPanel {
  initialSlotContent;

  @Element()
  el: HTMLElement;

  @Method()
  async toggleSelected(selected: boolean) {
    this.el.innerHTML = selected ? this.initialSlotContent : null;
  }

  @Prop({ reflect: true })
  label: string;

  componentWillLoad() {
    this.initialSlotContent = this.el.innerHTML;
    this.el.innerHTML = null;
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
