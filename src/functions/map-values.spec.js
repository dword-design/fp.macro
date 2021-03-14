import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginBabelPlugin from '@dword-design/tester-plugin-babel-plugin'

export default tester(
  [
    {
      from: endent`
      const { mapValues } = require('./src/index.macro')

      mapValues(x => x.name)
    `,
      to: endent`
          x => Object.entries(x).reduce((object, entry) => ({ ...object,
            [entry[0]]: (x => x.name)(entry[1])
          }), {});
        `,
    },
  ],
  [testerPluginBabelPlugin({ plugins: ['babel-plugin-macros'] })]
)
