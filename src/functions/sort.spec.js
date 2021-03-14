import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginBabelPlugin from '@dword-design/tester-plugin-babel-plugin'

export default tester(
  [
    {
      from: endent`
      const { sort } = require('./src/index.macro')

      sort
    `,
      to: 'x => [...x].sort();',
    },
    {
      from: endent`
      const { sort } = require('./src/index.macro')

      sort(y => y.name)
    `,
      to: 'x => [...x].sort(y => y.name);',
    },
  ],
  [testerPluginBabelPlugin({ plugins: ['babel-plugin-macros'] })]
)
