import { transform } from '@babel/core'
import { endent, mapValues, property } from '@dword-design/functions'
import P from 'path'

const runTest = config => async () =>
  expect(
    transform(config.from, {
      babelrc: false,
      filename: P.join(process.cwd(), 'index.js'),
      plugins: ['babel-plugin-macros'],
    })
      |> await
      |> property('code')
  ).toEqual(config.to)

export default {
  valid: {
    from: endent`
      const { map } = require('./src/index.macro')

      map(x => x * 2)([1, 2])
    `,
    to: '(x => x.map(x => x * 2))([1, 2]);',
  },
} |> mapValues(runTest)
