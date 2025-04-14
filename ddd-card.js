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

export class DddCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.primary = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
        ...super.properties,
        title: { type: String },
        image: { type: String },
        description: { type: String },
        link: { type: String },
        primary: {
          type: String,
          Reflect: true,
          DDDDataAttributes: "data-primary",
        },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
        :host {
          display: inline-block;
          border: 1px solid var(--ddd-border-color, #ccc);
          border-radius: var(--ddd-border-radius, 12px);
  
          max-width: 420px;
          width: 100%;
          height: 100%;
          font-family: "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Open Sans", "Helvetica Neue", sans-serif;
          margin: 12px
        }

        .wrapper {
          display: flex; 
          flex-wrap: wrap;
          gap: var(--ddd-spacing-5); 
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }

        .title-bar {
          text-align: left;
          padding-left: var(--ddd-spacing-3);
          margin-top: var(--ddd-spacing-3);
          color: var(--ddd-theme-default-nittanyNavy);
          
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-m);
        }

        .image-container {
          border-bottom: 0.75rem var(--ddd-theme-default-nittanyNavy) solid;
        }

        .image-container img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--ddd-border-radius, 12px) var(--ddd-border-radius, 12px) 0 0;
        }


        .link {
          margin-top: var(--ddd-spacing-2);
          transition: background-color 0.2s ease-in-out;
         }

        .link a {
         color: var(--ddd-theme-default-white);
         text-decoration: underline;
         background-color: var(--ddd-theme-primary);
         transition: background-color 0.2s ease-in-out;
        };

        a {
          background-color: var(--ddd-theme-default-white);
        }

        h3 span {
          font-size: var(
            --ddd-card-list-label-font-size,
            var(--ddd-font-size-s)
          );
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
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


        .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--ddd-spacing-3);
        }
        .lower-card{
          background-color: var(--ddd-theme-default-white);
          padding: var(--ddd-spacing-1);
        }

        button {
          width: 100%;
          background-color: var(--ddd-theme-default-beaverBlue);
          color: var(--ddd-theme-default-white);
          padding: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-4xs);
          font-weight: var(--ddd-font-weight-bold);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          margin-bottom: var(--ddd-spacing-4);
        }
          
        .description {
          padding: var(--ddd-spacing-3);
          height: 125px;
          color: var(--ddd-theme-default-coalyGray);
          text-align: left;
        }
    `];
  }

  

  // Lit render the HTML
  render() {
    return html`
    <div class="card">
        <div class="image-container">
          <img src="${this.image}" alt="${this.title || "Card image"}" />
        </div>
      <div class="lower-card">
        <div class="title-bar">${this.title}</div>
        <div class="description">
          <slot></slot>
        </div>
        ${this.link
          ? html`<div class="link">
              <div class="button-container">
                <button @click=${this.clickEvent}>Explore ></button>
              <div></div>
            </div> `
          : ""}
        </div>
     </div>
    `;
  }
  clickEvent() {
    window.open(this.link);
  }
  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(DddCard.tag, DddCard);