import { Component, Host, h, Listen, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hs-tabs',
  shadow: false,
})
export class HsTabs {
  tabs = [];
  tabPanels = [];

  /**
   * Configures the tab/panels to select by default upon loading.
   */
  @Prop({ reflect: true })
  selectedIndex = 0;

  @Element()
  el: HTMLElement;

  @Listen('tabClick')
  tabClickHandler(e) {
    this.tabPanels.forEach(async (_, key) => {
      this.tabs[key].toggleSelected(key === e.detail);
      this.tabPanels[key].toggleSelected(key === e.detail);
    });
  }

  componentWillLoad() {
    this.tabs = Array.from(this.el.querySelectorAll('hs-tab'));
    this.tabPanels = Array.from(this.el.querySelectorAll('hs-tab-panel'));

    const selectedTabIndex = this.selectedIndex < this.tabPanels.length ? this.selectedIndex : 0;

    this.tabs[selectedTabIndex].toggleSelected(true);
    this.tabPanels[selectedTabIndex].toggleSelected(true);
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
