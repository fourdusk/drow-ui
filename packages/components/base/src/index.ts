import { GLOBAL_CONFIG_PROVIDER } from '@drow-ui/constants'
import { LitElement, PropertyValues } from 'lit'

type Constructor<T = Record<PropertyKey, PropertyValues>> = new (
  // biome-ignore lint/suspicious/noExplicitAny: allow any
  ...args: any[]
) => T

const Mixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class subClass extends superClass {
    static __prefix__ = GLOBAL_CONFIG_PROVIDER().prefix

    render() {}
  }
  return subClass
}

export const Base = Mixin(LitElement)
