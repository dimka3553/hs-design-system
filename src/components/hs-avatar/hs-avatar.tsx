import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-avatar',
  styleUrl: 'hs-avatar.css',
  shadow: false,
})
export class HsAvatar {
  @Prop()
  image: string = 'https://thispersondoesnotexist.com/image';

  @Prop()
  countryimage: string = '';

  render() {
    return (
      <div class="w-full h-full rounded-full relative">
        <img class="w-full h-full rounded-full" src={this.image} alt="avatar" />
        {this.countryimage && <img class="absolute bottom-0 right-0 w-[30%] h-[30%] rounded-full" src={this.countryimage} alt="country" />}
      </div>
    );
  }
}
