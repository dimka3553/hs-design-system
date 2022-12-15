import { Component, Prop, h } from '@stencil/core';
// import { HsHeader } from '../hs-header/hs-header';

@Component({
  tag: 'hs-card',
  styleUrl: 'hs-card.css',
  shadow: false,
})
export class HsCard {
  @Prop() cardtitle: string = 'Title goes here';
  @Prop() subtitle: string = 'Subtitle goes here';
  @Prop() image: string = 'https://thisartworkdoesnotexist.com/';

  render() {
    //make headerprops of type HsHeader
    // const headerProps: HsHeader = {
    //   type: "3",
    //   color: 'primary',
    // };
    return (
      <div class="p-8 border-neutral-200 border-[1px] rounded-md flex flex-row flex-wrap justify-center w-full max-w-[320px] gap-8">
        <div class="w-full flex justify-center">
          <div class="min-w-[200px] min-h-[200px] w-[200px] h-[200px]">
            <hs-avatar image={this.image} />
          </div>
        </div>

        <div class={'w-full flex flex-wrap flex-row gap-2'}>
          <div class="p-t-[-6px]">
            <hs-header color="primary" type="6">
              {this.subtitle}
            </hs-header>
          </div>
          <hs-header type="3" color="primary">
            {this.cardtitle}
          </hs-header>
          <p>
            <slot></slot>
          </p>
        </div>
      </div>
    );
  }
}
