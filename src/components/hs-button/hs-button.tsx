import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'hs-button',
  styleUrl: 'hs-button.css',
  shadow: false, // Disable Shadow DOM to benefit from global styles defined in Design Tokens
})
export class HsButton {
  @Prop()
  type: 'text' | 'icon' = 'text';

  @Prop()
  size: 'md' | 'lg' = 'md';

  @Prop()
  color: 'primary' | 'secondary' = 'primary';

  @Prop()
  disabled: boolean = false;

  @Prop()
  icon: string = '';

  @Prop()
  loading: boolean = false;

  @Event({})
  clicked;

  clickHandler(e) {
    this.clicked.emit(e);
  }

  render() {
    let s = 'h-14 w-14 min-h-14 min-w-14';
    if (this.size == 'md' && this.type == 'text') {
      s = 'h-12 min-h-12 px-6 gap-6';
    } else if (this.size == 'lg' && this.type == 'text') {
      s = 'h-14 min-h-14 px-10 gap-10';
    } else if (this.size == 'md' && this.type == 'icon') {
      s = 'h-12 w-12 min-h-12 min-w-12';
    }

    //if type is icon and slot is not empty, throw error
    if (this.type == 'icon' && this.icon == '') {
      throw new Error('Icon type button must have an icon prop');
    }

    if (this.disabled) {
      s = `${s} cursor-not-allowed text-neutral-500`;
      if (this.color == 'primary') {
        s = `${s} border-neutral-100 border-2 text-neutral-500 bg-neutral-200`;
      }
    } else {
      if (this.color == 'primary') {
        s = `${s} bg-primary-500`;
        if (!this.loading) {
          s = `${s} hover:bg-primary-600 transition-[0.2s] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 active:ring-primary-200 active:ring-opacity-5 active:ring-2`;
        }
      } else {
        s = `${s} border-neutral-100 border-2`;
        if (!this.loading) {
          s = `${s} hover:border-primary-500 transition-[0.2s focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50] active:ring-primary-200 active:ring-opacity-5 active:ring-2`;
        }
      }
    }

    let disabled = JSON.stringify({ disabled: this.disabled });

    if (this.loading) {
      s = `${s} cursor-default`;
      disabled = JSON.stringify({ disabled: true });
    }

    if (this.color == 'secondary') {
      s = `${s} border-neutral-100 border-2`;
    }

    //convert this.disabled to json

    return (
      <hs-box as="button" styles={`rounded-[9999px]  ${s} flex items-center justify-center`} attr={disabled}>
        {this.icon != '' && !this.loading && (
          <hs-box as="i" styles={`fa-solid fa-${this.icon} text-${this.disabled ? 'neutral-500' : this.color == 'primary' ? 'white' : 'primary-500'}`}></hs-box>
        )}
        {!this.loading && (
          <hs-text as="span" color={this.disabled ? 'neutral-500' : this.color == 'primary' ? 'white' : 'primary-500'} weight="500" size={1}>
            {this.type == 'text' ? (
              <slot></slot>
            ) : (
              <hs-box styles="hidden">
                <slot></slot>
              </hs-box>
            )}
          </hs-text>
        )}
        {this.loading && (
          <hs-loading size={2} color={this.color == 'primary' ? 'white' : 'primary-500'}>
            <slot></slot>
          </hs-loading>
        )}
      </hs-box>
    );
  }
}
