import '@drow-ui/theme/share/index.less'

const start = async () => {
  const body = document.querySelector('body')
  const coms = import.meta.glob('./components/*.ts', {
    import: 'default',
    eager: true
  })
  const name = location.pathname.replace(/^\//, '')
  const el = coms[`./components/${name}.ts`]
  if (!el) {
    return body?.prepend('No component')
  }
  body?.prepend(el as HTMLElement)
}

start()
