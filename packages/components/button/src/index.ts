import { Base } from '@drow-ui/components/base'
import { html, unsafeCSS } from 'lit'
import style from '../style/index.less?inline'

export class Button extends Base {
  static __tag__ = `${Base.__prefix__}-button`

  static styles = unsafeCSS(style)

  render() {
    return html`
      <button type="button" class=${Button.__tag__}>
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </button>
    `
  }
}
