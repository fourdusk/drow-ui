import { PREFIX } from '@drow-ui/constants'
import { LitElement, css, html } from 'lit'

export class Divider extends LitElement {
  static readonly tag = `${PREFIX}divider`

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
