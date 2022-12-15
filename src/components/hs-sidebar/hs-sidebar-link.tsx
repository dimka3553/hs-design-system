import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-sidebar-link',
  styleUrl: 'hs-sidebar.css',
  shadow: false,
})
export class HsSidebarLink {
  @Prop()
  to: string;
  @Prop()
  icon: string;
  @Prop()
  label: string;
  @Prop()
  active: boolean;
  render() {
    return (
      <a href={this.to}>
        <div class="relative">
          {' '}
          <div class={'pl-[24px] h-[40px] flex items-center gap-2 hover:bg-neutral-50 transition-[0.2s] ' + (this.active && ' !bg-primary-50')}>
            <i class={`fa-solid fa-${this.icon} ${this.active ? 'text-primary-500' : 'text-neutral-500'}`}></i>
            <span class={`text-[1rem] ${this.active ? 'text-primary-500' : 'text-neutral-500'}`}>{this.label}</span>
          </div>
          {this.active && <div class="absolute right-0 w-[2px] top-0 h-[40px] bg-primary-500"></div>}
        </div>
      </a>
    );
  }
}
