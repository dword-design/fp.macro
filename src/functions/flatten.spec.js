import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginBabelPlugin from '@dword-design/tester-plugin-babel-plugin'

export default tester(
  [
    {
      from: endent`
      const { flatten } = require('./src/index.macro')

      flatten
    `,
      to: 'x => x.flatten();',
    },
  ],
  [testerPluginBabelPlugin({ plugins: ['babel-plugin-macros'] })]
)
