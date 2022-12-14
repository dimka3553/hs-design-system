import { css } from '@emotion/css';
import { Component, h, Prop, Element } from '@stencil/core';
// import { css } from '@emotion/css';

//prettier-ignore
type TextTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'legend' | 'caption' | 'blockquote' | 'cite' | 'code' | 'del' | 'dfn' | 'em' | 'i' | 'ins' | 'kbd' | 'mark' | 'pre' | 'q' | 's' | 'samp' | 'small' | 'strong' | 'sub' | 'sup' | 'time' | 'u' | 'var';
//prettier-ignore
type Color = "primary-50" | "primary-100" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-900" | "primary-800" | "white" | "black" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-500" | "neutral-700" | "neutral-900" | "success-50" | "success-500" | "danger-50" | "danger-500" | "warning-50" | "warning-500";

@Component({
  tag: 'hs-text',
  styleUrl: 'hs-text.css',
  shadow: false,
})
export class HsText {
  @Element()
  hostElement: HTMLElement;

  @Prop()
  as = 'span' as TextTag;

  @Prop()
  size: number = 1;

  @Prop()
  weight: '400' | '500' | '700' | 'normal' | 'bold' = '500';

  @Prop()
  color = 'black' as Color;

  @Prop()
  align: 'left' | 'center' | 'right' | 'justify' = 'left';

  @Prop()
  class: string;

  componentWillLoad() {
    //prettier-ignore
    if (!['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'legend', 'caption', 'blockquote', 'cite', 'code', 'del', 'dfn', 'em', 'i', 'ins', 'kbd', 'mark', 'pre', 'q', 's', 'samp', 'small', 'strong', 'sub', 'sup', 'time', 'u', 'var'].includes(this.as)) {
      console.error(`Invalid tag: ${this.as}`);
      this.as = 'span';
    }

    //prettier-ignore
    if (!["400", "500", "700", "normal", "bold"].includes(this.weight)) {
      console.error(`Invalid weight: ${this.weight}`);
      this.weight = "400";
    }

    //prettier-ignore
    if (!["primary-50", "primary-100", "primary-300", "primary-400", "primary-500", "primary-600", "primary-700", "primary-900", "primary-800", "white", "black", "neutral-50", "neutral-100", "neutral-200", "neutral-500", "neutral-700", "neutral-900", "success-50", "success-500", "danger-50", "danger-500", "warning-50", "warning-500"].includes(this.color)) {
      console.error(`Invalid color: ${this.color}`);
      this.color = "black";
    }

    //prettier-ignore
    if (!["left", "center", "right", "justify"].includes(this.align)) {
      console.error(`Invalid align: ${this.align}`);
      this.align = "left";
    }

    //if there is a class warn user that class should not be used
    if (this.class) {
      console.warn(`don't use the class attribute. Use as, color, size, weight, and align instead.`);
    }
  }

  render() {
    const Tag = this.as;

    //create style for size
    const style = css`
      font-size: ${this.size}rem;
      font-weight: ${this.weight};
      color: var(--hs-color-${this.color});
      text-align: ${this.align};
    `;

    return (
      <Tag class={style}>
        <slot></slot>
      </Tag>
    );
  }
}
