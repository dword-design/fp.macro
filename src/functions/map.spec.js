import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginBabelPlugin from '@dword-design/tester-plugin-babel-plugin'

export default tester(
  [
    {
      from: endent`
      const { map } = require('./src/index.macro')

      map(x => x * 2)
    `,
      to: 'x => x.map(x => x * 2);',
    },
  ],
  [testerPluginBabelPlugin({ plugins: ['babel-plugin-macros'] })]
)
