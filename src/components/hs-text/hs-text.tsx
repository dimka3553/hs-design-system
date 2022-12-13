import { Component, h, Prop, Element } from '@stencil/core';
// import { css } from '@emotion/css';

//prettier-ignore
type TextTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'legend' | 'caption' | 'blockquote' | 'cite' | 'code' | 'del' | 'dfn' | 'em' | 'i' | 'ins' | 'kbd' | 'mark' | 'pre' | 'q' | 's' | 'samp' | 'small' | 'strong' | 'sub' | 'sup' | 'time' | 'u' | 'var';

@Component({
  tag: 'hs-text',
  styleUrl: 'hs-text.css',
  shadow: false,
  scoped: true,
})
export class HsText {
  @Element()
  hostElement: HTMLElement;

  @Prop()
  as = 'span' as TextTag;

  @Prop()
  size: number = 1;

  componentWillLoad() {
    //prettier-ignore
    if (!['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'legend', 'caption', 'blockquote', 'cite', 'code', 'del', 'dfn', 'em', 'i', 'ins', 'kbd', 'mark', 'pre', 'q', 's', 'samp', 'small', 'strong', 'sub', 'sup', 'time', 'u', 'var'].includes(this.as)) {
      console.error(`Invalid tag: ${this.as}`);
      this.as = 'span';
    }
  }

  render() {
    const Tag = this.as;

    return (
      <Tag>
        <slot></slot>
      </Tag>
    );
  }
}
