import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('d-button')
class DButton extends LitElement {
  render() {
    return html`<button><slot></slot></button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'd-button': DButton
  }
}
