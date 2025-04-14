/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { DDDDataAttributes } from "@haxtheweb/d-d-d/lib/DDDStyles";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */

export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.primary = "";
    this.accent = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      description: { type: String },
      primary: {
        type: String,
        reflect: true,
        attribute: "ddd-primary",
      },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
       :host {
          display: block;
          flex-wrap: wrap;
          border: 1px solid var(--ddd-border-color, #ccc);
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-3);
          text-align: left;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .title-bar {
          padding: var(--ddd-spacing-2);
          font-weight: var(--ddd-font-weight-bold);
        }
        h3 span {
          font-size: var( --ddd-card-list-label-font-size, var(--ddd-font-size-s));
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
          div ::slotted(*) {
          display: inline-block;
        }
        .ddd-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-md);
          background-color: var(--ddd-theme-accent);
        }
          button {
          //background-color: --ddd-theme-default-beaverBlue;
          color: var(--ddd-theme-default-white);
          padding: var(--ddd-spacing-5);
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-size-4xs);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}</span> ${this.title}</h3>
  <slot></slot>
</div>`;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);