const DEFAULT_CONFIG = {
  prefix: 'd-'
}

interface Config {
  prefix?: string
}

export const GLOBAL_CONFIG_PROVIDER = (config: Config = {}) => {
  return Object.assign(DEFAULT_CONFIG, config)
}
