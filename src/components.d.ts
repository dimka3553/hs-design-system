/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Colors, htmlTags } from "./types";
export namespace Components {
    interface HsAlert {
        "color": 'primary' | 'secondary';
    }
    interface HsAnchor {
        "to": string;
    }
    interface HsAvatar {
        "countryimage": string;
        "image": string;
    }
    interface HsBadge {
        "color": Colors;
        "size": 'sm' | 'md' | 'lg';
    }
    interface HsBox {
        "as": htmlTags;
        "attr": string;
        "class": string;
        "styles": string;
    }
    interface HsButton {
        "color": 'primary' | 'secondary';
        "disabled": boolean;
        "icon": string;
        "loading": boolean;
        "size": 'sm' | 'md' | 'lg';
        "type": 'text' | 'icon';
    }
    interface HsCallout {
        "text": string;
        "type": 'info' | 'success' | 'warning' | 'danger';
    }
    interface HsCard {
        "cardtitle": string;
        "image": string;
        "subtitle": string;
    }
    interface HsDemoModal {
    }
    interface HsHeader {
        "align": 'left' | 'center' | 'right' | 'justify';
        "color": 'primary' | 'neutral' | 'white';
        "type": '1' | '2' | '3' | '4' | '5' | '6';
    }
    interface HsInput {
        "helptext": string;
        "helptexttype": 'error' | 'info';
        "itemid": string;
        "label": string;
        "name": string;
        "type": 'text' | 'password' | 'checkbox' | 'radio' | 'textarea';
        "value": string;
    }
    interface HsLoading {
        "color": Colors;
        "size": number;
    }
    interface HsModal {
        "modaltitle": string;
        "open": boolean;
    }
    interface HsPagination {
        "currentpage": number;
        "totalpages": number;
    }
    interface HsParagraph {
        "align": 'left' | 'center' | 'right' | 'justify';
        "color": 'primary' | 'neutral' | 'white';
        "type": 'sm' | 'md' | 'lg';
    }
    interface HsRadioGroup {
        "direction": 'col' | 'row';
    }
    interface HsSidebar {
    }
    interface HsSidebarLink {
        "active": boolean;
        "icon": string;
        "label": string;
        "to": string;
    }
    interface HsStack {
        "direction": 'col' | 'row';
        "spacing": string;
    }
    interface HsTab {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface HsTabList {
    }
    interface HsTabPanel {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface HsTabPanels {
    }
    interface HsTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex": number;
    }
    interface HsText {
        "align": 'left' | 'center' | 'right' | 'justify';
        "as": "small" | "sub" | "sup" | "blockquote" | "caption" | "cite" | "code" | "del" | "dfn" | "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "i" | "ins" | "kbd" | "label" | "legend" | "mark" | "p" | "pre" | "q" | "s" | "samp" | "span" | "strong" | "time" | "u" | "var";
        "class": string;
        "color": "primary-50" | "primary-100" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-900" | "primary-800" | "white" | "black" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-500" | "neutral-700" | "neutral-900" | "success-50" | "success-500" | "danger-50" | "danger-500" | "warning-50" | "warning-500";
        "size": number;
        "weight": '400' | '500' | '700' | 'normal' | 'bold';
    }
}
export interface HsButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHsButtonElement;
}
export interface HsTabCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHsTabElement;
}
declare global {
    interface HTMLHsAlertElement extends Components.HsAlert, HTMLStencilElement {
    }
    var HTMLHsAlertElement: {
        prototype: HTMLHsAlertElement;
        new (): HTMLHsAlertElement;
    };
    interface HTMLHsAnchorElement extends Components.HsAnchor, HTMLStencilElement {
    }
    var HTMLHsAnchorElement: {
        prototype: HTMLHsAnchorElement;
        new (): HTMLHsAnchorElement;
    };
    interface HTMLHsAvatarElement extends Components.HsAvatar, HTMLStencilElement {
    }
    var HTMLHsAvatarElement: {
        prototype: HTMLHsAvatarElement;
        new (): HTMLHsAvatarElement;
    };
    interface HTMLHsBadgeElement extends Components.HsBadge, HTMLStencilElement {
    }
    var HTMLHsBadgeElement: {
        prototype: HTMLHsBadgeElement;
        new (): HTMLHsBadgeElement;
    };
    interface HTMLHsBoxElement extends Components.HsBox, HTMLStencilElement {
    }
    var HTMLHsBoxElement: {
        prototype: HTMLHsBoxElement;
        new (): HTMLHsBoxElement;
    };
    interface HTMLHsButtonElement extends Components.HsButton, HTMLStencilElement {
    }
    var HTMLHsButtonElement: {
        prototype: HTMLHsButtonElement;
        new (): HTMLHsButtonElement;
    };
    interface HTMLHsCalloutElement extends Components.HsCallout, HTMLStencilElement {
    }
    var HTMLHsCalloutElement: {
        prototype: HTMLHsCalloutElement;
        new (): HTMLHsCalloutElement;
    };
    interface HTMLHsCardElement extends Components.HsCard, HTMLStencilElement {
    }
    var HTMLHsCardElement: {
        prototype: HTMLHsCardElement;
        new (): HTMLHsCardElement;
    };
    interface HTMLHsDemoModalElement extends Components.HsDemoModal, HTMLStencilElement {
    }
    var HTMLHsDemoModalElement: {
        prototype: HTMLHsDemoModalElement;
        new (): HTMLHsDemoModalElement;
    };
    interface HTMLHsHeaderElement extends Components.HsHeader, HTMLStencilElement {
    }
    var HTMLHsHeaderElement: {
        prototype: HTMLHsHeaderElement;
        new (): HTMLHsHeaderElement;
    };
    interface HTMLHsInputElement extends Components.HsInput, HTMLStencilElement {
    }
    var HTMLHsInputElement: {
        prototype: HTMLHsInputElement;
        new (): HTMLHsInputElement;
    };
    interface HTMLHsLoadingElement extends Components.HsLoading, HTMLStencilElement {
    }
    var HTMLHsLoadingElement: {
        prototype: HTMLHsLoadingElement;
        new (): HTMLHsLoadingElement;
    };
    interface HTMLHsModalElement extends Components.HsModal, HTMLStencilElement {
    }
    var HTMLHsModalElement: {
        prototype: HTMLHsModalElement;
        new (): HTMLHsModalElement;
    };
    interface HTMLHsPaginationElement extends Components.HsPagination, HTMLStencilElement {
    }
    var HTMLHsPaginationElement: {
        prototype: HTMLHsPaginationElement;
        new (): HTMLHsPaginationElement;
    };
    interface HTMLHsParagraphElement extends Components.HsParagraph, HTMLStencilElement {
    }
    var HTMLHsParagraphElement: {
        prototype: HTMLHsParagraphElement;
        new (): HTMLHsParagraphElement;
    };
    interface HTMLHsRadioGroupElement extends Components.HsRadioGroup, HTMLStencilElement {
    }
    var HTMLHsRadioGroupElement: {
        prototype: HTMLHsRadioGroupElement;
        new (): HTMLHsRadioGroupElement;
    };
    interface HTMLHsSidebarElement extends Components.HsSidebar, HTMLStencilElement {
    }
    var HTMLHsSidebarElement: {
        prototype: HTMLHsSidebarElement;
        new (): HTMLHsSidebarElement;
    };
    interface HTMLHsSidebarLinkElement extends Components.HsSidebarLink, HTMLStencilElement {
    }
    var HTMLHsSidebarLinkElement: {
        prototype: HTMLHsSidebarLinkElement;
        new (): HTMLHsSidebarLinkElement;
    };
    interface HTMLHsStackElement extends Components.HsStack, HTMLStencilElement {
    }
    var HTMLHsStackElement: {
        prototype: HTMLHsStackElement;
        new (): HTMLHsStackElement;
    };
    interface HTMLHsTabElement extends Components.HsTab, HTMLStencilElement {
    }
    var HTMLHsTabElement: {
        prototype: HTMLHsTabElement;
        new (): HTMLHsTabElement;
    };
    interface HTMLHsTabListElement extends Components.HsTabList, HTMLStencilElement {
    }
    var HTMLHsTabListElement: {
        prototype: HTMLHsTabListElement;
        new (): HTMLHsTabListElement;
    };
    interface HTMLHsTabPanelElement extends Components.HsTabPanel, HTMLStencilElement {
    }
    var HTMLHsTabPanelElement: {
        prototype: HTMLHsTabPanelElement;
        new (): HTMLHsTabPanelElement;
    };
    interface HTMLHsTabPanelsElement extends Components.HsTabPanels, HTMLStencilElement {
    }
    var HTMLHsTabPanelsElement: {
        prototype: HTMLHsTabPanelsElement;
        new (): HTMLHsTabPanelsElement;
    };
    interface HTMLHsTabsElement extends Components.HsTabs, HTMLStencilElement {
    }
    var HTMLHsTabsElement: {
        prototype: HTMLHsTabsElement;
        new (): HTMLHsTabsElement;
    };
    interface HTMLHsTextElement extends Components.HsText, HTMLStencilElement {
    }
    var HTMLHsTextElement: {
        prototype: HTMLHsTextElement;
        new (): HTMLHsTextElement;
    };
    interface HTMLElementTagNameMap {
        "hs-alert": HTMLHsAlertElement;
        "hs-anchor": HTMLHsAnchorElement;
        "hs-avatar": HTMLHsAvatarElement;
        "hs-badge": HTMLHsBadgeElement;
        "hs-box": HTMLHsBoxElement;
        "hs-button": HTMLHsButtonElement;
        "hs-callout": HTMLHsCalloutElement;
        "hs-card": HTMLHsCardElement;
        "hs-demo-modal": HTMLHsDemoModalElement;
        "hs-header": HTMLHsHeaderElement;
        "hs-input": HTMLHsInputElement;
        "hs-loading": HTMLHsLoadingElement;
        "hs-modal": HTMLHsModalElement;
        "hs-pagination": HTMLHsPaginationElement;
        "hs-paragraph": HTMLHsParagraphElement;
        "hs-radio-group": HTMLHsRadioGroupElement;
        "hs-sidebar": HTMLHsSidebarElement;
        "hs-sidebar-link": HTMLHsSidebarLinkElement;
        "hs-stack": HTMLHsStackElement;
        "hs-tab": HTMLHsTabElement;
        "hs-tab-list": HTMLHsTabListElement;
        "hs-tab-panel": HTMLHsTabPanelElement;
        "hs-tab-panels": HTMLHsTabPanelsElement;
        "hs-tabs": HTMLHsTabsElement;
        "hs-text": HTMLHsTextElement;
    }
}
declare namespace LocalJSX {
    interface HsAlert {
        "color"?: 'primary' | 'secondary';
    }
    interface HsAnchor {
        "to"?: string;
    }
    interface HsAvatar {
        "countryimage"?: string;
        "image"?: string;
    }
    interface HsBadge {
        "color"?: Colors;
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface HsBox {
        "as"?: htmlTags;
        "attr"?: string;
        "class"?: string;
        "styles"?: string;
    }
    interface HsButton {
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "icon"?: string;
        "loading"?: boolean;
        "onClicked"?: (event: HsButtonCustomEvent<any>) => void;
        "size"?: 'sm' | 'md' | 'lg';
        "type"?: 'text' | 'icon';
    }
    interface HsCallout {
        "text"?: string;
        "type"?: 'info' | 'success' | 'warning' | 'danger';
    }
    interface HsCard {
        "cardtitle"?: string;
        "image"?: string;
        "subtitle"?: string;
    }
    interface HsDemoModal {
    }
    interface HsHeader {
        "align"?: 'left' | 'center' | 'right' | 'justify';
        "color"?: 'primary' | 'neutral' | 'white';
        "type"?: '1' | '2' | '3' | '4' | '5' | '6';
    }
    interface HsInput {
        "helptext"?: string;
        "helptexttype"?: 'error' | 'info';
        "itemid"?: string;
        "label"?: string;
        "name"?: string;
        "type"?: 'text' | 'password' | 'checkbox' | 'radio' | 'textarea';
        "value"?: string;
    }
    interface HsLoading {
        "color"?: Colors;
        "size"?: number;
    }
    interface HsModal {
        "modaltitle"?: string;
        "open"?: boolean;
    }
    interface HsPagination {
        "currentpage"?: number;
        "totalpages"?: number;
    }
    interface HsParagraph {
        "align"?: 'left' | 'center' | 'right' | 'justify';
        "color"?: 'primary' | 'neutral' | 'white';
        "type"?: 'sm' | 'md' | 'lg';
    }
    interface HsRadioGroup {
        "direction"?: 'col' | 'row';
    }
    interface HsSidebar {
    }
    interface HsSidebarLink {
        "active"?: boolean;
        "icon"?: string;
        "label"?: string;
        "to"?: string;
    }
    interface HsStack {
        "direction"?: 'col' | 'row';
        "spacing"?: string;
    }
    interface HsTab {
        "onTabClick"?: (event: HsTabCustomEvent<any>) => void;
    }
    interface HsTabList {
    }
    interface HsTabPanel {
    }
    interface HsTabPanels {
    }
    interface HsTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex"?: number;
    }
    interface HsText {
        "align"?: 'left' | 'center' | 'right' | 'justify';
        "as"?: "small" | "sub" | "sup" | "blockquote" | "caption" | "cite" | "code" | "del" | "dfn" | "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "i" | "ins" | "kbd" | "label" | "legend" | "mark" | "p" | "pre" | "q" | "s" | "samp" | "span" | "strong" | "time" | "u" | "var";
        "class"?: string;
        "color"?: "primary-50" | "primary-100" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-900" | "primary-800" | "white" | "black" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-500" | "neutral-700" | "neutral-900" | "success-50" | "success-500" | "danger-50" | "danger-500" | "warning-50" | "warning-500";
        "size"?: number;
        "weight"?: '400' | '500' | '700' | 'normal' | 'bold';
    }
    interface IntrinsicElements {
        "hs-alert": HsAlert;
        "hs-anchor": HsAnchor;
        "hs-avatar": HsAvatar;
        "hs-badge": HsBadge;
        "hs-box": HsBox;
        "hs-button": HsButton;
        "hs-callout": HsCallout;
        "hs-card": HsCard;
        "hs-demo-modal": HsDemoModal;
        "hs-header": HsHeader;
        "hs-input": HsInput;
        "hs-loading": HsLoading;
        "hs-modal": HsModal;
        "hs-pagination": HsPagination;
        "hs-paragraph": HsParagraph;
        "hs-radio-group": HsRadioGroup;
        "hs-sidebar": HsSidebar;
        "hs-sidebar-link": HsSidebarLink;
        "hs-stack": HsStack;
        "hs-tab": HsTab;
        "hs-tab-list": HsTabList;
        "hs-tab-panel": HsTabPanel;
        "hs-tab-panels": HsTabPanels;
        "hs-tabs": HsTabs;
        "hs-text": HsText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hs-alert": LocalJSX.HsAlert & JSXBase.HTMLAttributes<HTMLHsAlertElement>;
            "hs-anchor": LocalJSX.HsAnchor & JSXBase.HTMLAttributes<HTMLHsAnchorElement>;
            "hs-avatar": LocalJSX.HsAvatar & JSXBase.HTMLAttributes<HTMLHsAvatarElement>;
            "hs-badge": LocalJSX.HsBadge & JSXBase.HTMLAttributes<HTMLHsBadgeElement>;
            "hs-box": LocalJSX.HsBox & JSXBase.HTMLAttributes<HTMLHsBoxElement>;
            "hs-button": LocalJSX.HsButton & JSXBase.HTMLAttributes<HTMLHsButtonElement>;
            "hs-callout": LocalJSX.HsCallout & JSXBase.HTMLAttributes<HTMLHsCalloutElement>;
            "hs-card": LocalJSX.HsCard & JSXBase.HTMLAttributes<HTMLHsCardElement>;
            "hs-demo-modal": LocalJSX.HsDemoModal & JSXBase.HTMLAttributes<HTMLHsDemoModalElement>;
            "hs-header": LocalJSX.HsHeader & JSXBase.HTMLAttributes<HTMLHsHeaderElement>;
            "hs-input": LocalJSX.HsInput & JSXBase.HTMLAttributes<HTMLHsInputElement>;
            "hs-loading": LocalJSX.HsLoading & JSXBase.HTMLAttributes<HTMLHsLoadingElement>;
            "hs-modal": LocalJSX.HsModal & JSXBase.HTMLAttributes<HTMLHsModalElement>;
            "hs-pagination": LocalJSX.HsPagination & JSXBase.HTMLAttributes<HTMLHsPaginationElement>;
            "hs-paragraph": LocalJSX.HsParagraph & JSXBase.HTMLAttributes<HTMLHsParagraphElement>;
            "hs-radio-group": LocalJSX.HsRadioGroup & JSXBase.HTMLAttributes<HTMLHsRadioGroupElement>;
            "hs-sidebar": LocalJSX.HsSidebar & JSXBase.HTMLAttributes<HTMLHsSidebarElement>;
            "hs-sidebar-link": LocalJSX.HsSidebarLink & JSXBase.HTMLAttributes<HTMLHsSidebarLinkElement>;
            "hs-stack": LocalJSX.HsStack & JSXBase.HTMLAttributes<HTMLHsStackElement>;
            "hs-tab": LocalJSX.HsTab & JSXBase.HTMLAttributes<HTMLHsTabElement>;
            "hs-tab-list": LocalJSX.HsTabList & JSXBase.HTMLAttributes<HTMLHsTabListElement>;
            "hs-tab-panel": LocalJSX.HsTabPanel & JSXBase.HTMLAttributes<HTMLHsTabPanelElement>;
            "hs-tab-panels": LocalJSX.HsTabPanels & JSXBase.HTMLAttributes<HTMLHsTabPanelsElement>;
            "hs-tabs": LocalJSX.HsTabs & JSXBase.HTMLAttributes<HTMLHsTabsElement>;
            "hs-text": LocalJSX.HsText & JSXBase.HTMLAttributes<HTMLHsTextElement>;
        }
    }
}
