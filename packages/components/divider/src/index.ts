import { Base } from '@drow-ui/components/base'
import { css, html } from 'lit'
export class Divider extends Base {
  static tag = `${Divider.prefix}divider`

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
