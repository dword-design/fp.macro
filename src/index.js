import { forEach } from '@dword-design/functions'
import { createMacro } from 'babel-plugin-macros'

import * as functions from './functions'

export default createMacro(context =>
  forEach(context.references, (references, name) =>
    references.forEach(reference =>
      functions[name](reference, context.babel.types)
    )
  )
)
