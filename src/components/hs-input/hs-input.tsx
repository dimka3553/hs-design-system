import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-input',
  styleUrl: 'hs-input.css',
  shadow: false,
})
export class HsInput {
  @Prop()
  type: 'text' | 'password' | 'checkbox' | 'radio' | 'textarea' = 'text';

  @Prop()
  label: string = '';

  @Prop()
  helptext: string = '';

  @Prop()
  helptexttype: 'error' | 'info' = 'info';

  @Prop()
  itemid: string = '';

  render() {
    if (this.type === 'textarea') {
      let style =
        (this.helptexttype != 'error' ? 'border-neutral-200' : '!border-danger-500') +
        ' border-[1px] rounded-md p-3 bg-transparent w-full max-w-[400px] focus:border-primary-500 !outline-none transition-[0.2s]';

      return (
        <hs-box styles="relative">
          <textarea id={this.itemid} class={style} name={this.itemid} placeholder=" "></textarea>
          <label
            htmlFor={this.itemid}
            class={'absolute p-2 m-1 transition-[0.2s] bg-white top-0 left-0 z-[-1] ' + (this.helptexttype != 'error' ? 'text-neutral-500' : '!text-danger-500')}
          >
            {this.label}
          </label>
          <p class={this.helptexttype == 'error' ? 'text-danger-500 text-[0.75rem] pl-3 m-[-3px]' : 'text-neutral-500 text-[0.75rem] pl-3 m-[-3px]'}>{this.helptext}</p>
        </hs-box>
      );
    } else if (this.type === 'radio') {
      return (
        <hs-box styles="flex items-center">
          <input type={this.type} id={this.itemid} name={this.itemid} />
          <label htmlFor={this.itemid} class={this.type}>
            <div class="radioselected"></div>
          </label>
          <label class="ml-3" htmlFor={this.itemid}>
            {this.label}
          </label>
        </hs-box>
      );
    } else if (this.type === 'checkbox') {
      return (
        <hs-box styles="flex items-center">
          <input type={this.type} id={this.itemid} name={this.itemid} />
          <label htmlFor={this.itemid} class={this.type}>
            <div class="tick">
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.47432 0.164072C7.66288 -0.0412493 7.9833 -0.0558466 8.19 0.131468C8.37372 0.297971 8.40575 0.567963 8.27816 0.77011L8.22282 0.8424L3.63682 5.83593C3.47125 6.01621 3.20354 6.04974 3.00046 5.9275L2.92766 5.87434L0.526854 3.77298C0.316934 3.58924 0.296702 3.27124 0.481666 3.06271C0.646079 2.87736 0.917279 2.84088 1.12295 2.96411L1.19667 3.01783L3.22275 4.79177L7.47432 0.164072Z"
                  fill="white"
                />
              </svg>
            </div>
          </label>
          <label class="ml-3" htmlFor={this.itemid}>
            {this.label}
          </label>
        </hs-box>
      );
    } else {
      let style =
        (this.helptexttype != 'error' ? 'border-neutral-200' : '!border-danger-500') +
        ' border-[1px] rounded-md p-3 bg-transparent w-full max-w-[400px] focus:border-primary-500 !outline-none transition-[0.2s]';

      return (
        <hs-box styles="relative">
          <input type={this.type} id={this.itemid} class={style} name={this.itemid} placeholder=" " />
          <label
            htmlFor={this.itemid}
            class={'absolute p-2 m-1 transition-[0.2s] bg-white top-0 left-0 z-[-1] ' + (this.helptexttype != 'error' ? 'text-neutral-500' : '!text-danger-500')}
          >
            {this.label}
          </label>
          <p class={this.helptexttype == 'error' ? 'text-danger-500 text-[0.75rem] pl-3 mt-[2px]' : 'text-neutral-500 text-[0.75rem] pl-3 mt-[2px]'}>{this.helptext}</p>
        </hs-box>
      );
    }
  }
}
