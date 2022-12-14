import { Component, Element, h, Prop } from '@stencil/core';
import { htmlTags } from '../../types';

const getElementAttributes = (nodeMap: NamedNodeMap) => {
  if (nodeMap) {
    const length = nodeMap.length;
    return Object.keys(nodeMap).reduce((props, current) => {
      try {
        const numCurrent = parseInt(current);
        if (numCurrent < length) {
          const property = nodeMap[current];
          return {
            ...props,
            [property.name]: property.value,
          };
        }
      } catch (err) {}
    }, {});
  }
  return {};
};

//prettier-ignore
//prettier-ignore
const tags = [
  'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'nobr', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp',
]

//prettier-ignore

@Component({
  tag: 'hs-box',
  styleUrl: 'hs-box.css',
  shadow: false,
  scoped: true,
})
export class HsBox {
  @Prop()
  as: htmlTags = 'div';

  @Prop()
  styles: string;

  @Prop()
  class: string;

  @Element()
  el: HTMLElement;

  componentDidMount() {
    //check if the as attribute is a valid html tag
    if (!tags.includes(this.as)) {
      console.error(`The as attribute is not a valid html tag. Please use one of the following: ${tags.join(', ')}`);
      this.as = 'div';
    }

    //if class is set warn the user that it is not recommended to use class
    if (this.class) {
      console.warn('The class attribute is not recommended. Please use the styles attribute instead.');
    }
  }

  render() {
    const Tag = this.as;

    //if the element has attributes, get them
    let properties = getElementAttributes(this.el.attributes);

    properties = { ...properties, class: this.styles };

    return (
      <Tag {...properties}>
        <slot></slot>
      </Tag>
    );
  }
}
