import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('d-divider')
class DDivider extends LitElement {
  static styles = css`
    div {
      display: flex;
      margin: 1px 0;
      width: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid red;
    }
  `
  render() {
    return html`<div></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'd-divider': DDivider
  }
}
