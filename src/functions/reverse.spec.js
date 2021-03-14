import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginBabelPlugin from '@dword-design/tester-plugin-babel-plugin'

export default tester(
  [
    {
      from: endent`
      const { reverse } = require('./src/index.macro')

      reverse
    `,
      to: 'x => [...x].reverse();',
    },
  ],
  [testerPluginBabelPlugin({ plugins: ['babel-plugin-macros'] })]
)
