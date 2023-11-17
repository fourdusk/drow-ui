import { Base } from '@drow-ui/components/base'
import { html, unsafeCSS } from 'lit'
import style from '../style/index.less?inline'

export class Button extends Base {
  static tag = `${Button.prefix}button`

  static styles = unsafeCSS(style)

  render() {
    return html`
    <button type="button" class=${Button.tag}>
      <slot></slot>
    </button>
    `
  }
}
