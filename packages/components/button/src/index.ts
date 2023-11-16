import { PREFIX } from '@drow-ui/constants'
import { LitElement, html } from 'lit'

export class Button extends LitElement {
  static readonly tag = `${PREFIX}button`

  render() {
    return html`
    <button type="button">
      <slot></slot>
    </button>
    `
  }
}
