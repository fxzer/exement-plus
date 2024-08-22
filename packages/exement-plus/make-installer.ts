import type { App, Plugin } from '@vue/runtime-core'
import { version } from './version'

export const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export function makeInstaler(components: Plugin[] = []) {
  const install = (app: App) => {
    if (app[INSTALLED_KEY])
      return
    components.forEach(component => app.use(component))
    app[INSTALLED_KEY] = true
    // TODO
    // if (options)
    //   provideGlobalConfig(options, app, true)
  }
  return {
    version,
    install,

  }
}
