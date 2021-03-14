import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginBabelPlugin from '@dword-design/tester-plugin-babel-plugin'

export default tester(
  [
    {
      from: endent`
      const { reduce } = require('./src/index.macro')

      reduce((acc, value) => acc + value, 0)
    `,
      to: 'x => x.reduce((acc, value) => acc + value, 0);',
    },
  ],
  [testerPluginBabelPlugin({ plugins: ['babel-plugin-macros'] })]
)
