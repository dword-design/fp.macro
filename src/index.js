import { forIn } from '@dword-design/functions'
import { createMacro } from 'babel-plugin-macros'

import * as functions from './functions'

export default createMacro(context =>
  forIn((references, name) =>
    references.forEach(reference =>
      functions[name](reference, context.babel.types)
    )
  )(context.references)
)
