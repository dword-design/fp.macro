import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginBabelPlugin from '@dword-design/tester-plugin-babel-plugin'

export default tester(
  [
    {
      from: endent`
      const { includes } = require('./src/index.macro')

      includes(1)
    `,
      to: 'x => x.includes(1);',
    },
  ],
  [testerPluginBabelPlugin({ plugins: ['babel-plugin-macros'] })]
)
