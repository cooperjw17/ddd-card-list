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
          display: block;
          border: 1px solid var(--ddd-border-color, #ccc);
          border-radius: var(--ddd-border-radius, 12px);
          padding: 0x;
          width: 400px;
          font-family: "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Open Sans", "Helvetica Neue", sans-serif;
          /* padding: 10px; */
          /* max-width: 300px;
          text-align: left;
          --component-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
          --component-border-color: var(--component-color);
          --component-background-color: var(
            --lowContrast-override,
            var(
              --ddd-theme-accent,
              var(--ddd-theme-bgContrast, var(--ddd-theme-default-white))
            )
          );
        }

        .wrapper {
          display: flex; 
          flex-wrap: wrap;
          gap: 20px; 
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }

        .title-bar {
          text-align: left;
          padding-left: 10px;
          margin-top: 10px;
          color: var(--ddd-theme-default-nittanyNavy);
          border: none;
          font-weight: bold;
          font-size: 28px;
        }

      

          img {
          border-radius: var(--ddd-border-radius, 12px)
            var(--ddd-border-radius, 12px) 0 0;
          }

        .image-container {
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
          }

        .image-container img {
        width: 100%;
        height: auto;
        display: block;
        }


        .link {
          margin-top: var(--ddd-spacing-2);
         }

        .link a {
         color: white;
         text-decoration: underline;
         background-color: var(--ddd-theme-primary);
        };

        a {
          background-color: white;
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
          padding: 10px;
          border: 1px solid var(--ddd-theme-primary);
          border-radius: 10px;
          background-color: var(--ddd-theme-accent);
        }


        .title-bar {
          text-align: left;
          padding-left: 10px;
          margin-top: 10px;
          color: var(--ddd-theme-default-nittanyNavy);
          border: none;
          font-weight: bold;
          font-size: 28px;
        }

        .image-container {
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
        }
        .image-container img {
          width: 100%;
          height: auto;
          display: block;
        }

        .link {
          margin-top: var(--ddd-spacing-2);
        }
        .link a {
          color: white;
          text-decoration: underline;
          font-size: var(--ddd-font-size-xs);
          background-color: var(--ddd-theme-primary);
        }
        .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }
        button {
          width: 100%;
          background-color: #004684;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          margin-bottom: 15px;
        }
        .description {
          padding: 10px;
          height: 125px;
          color: var(--ddd-theme-default-coalyGray);
        }
    `];
  }

  

  // Lit render the HTML
  render() {
    return html`
      <div class="image-container">
        <img src="${this.image}" alt="${this.title || "Card image"}" />
      </div>
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