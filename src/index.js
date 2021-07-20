import { forEach } from '@dword-design/functions'
import { createMacro } from 'babel-plugin-macros'

import * as functions from './functions'

export default createMacro(context =>
  forEach(context.references, (references, name) => {
    for (const reference of references) {
      functions[name](reference, context.babel.types)
    }
  })
)
