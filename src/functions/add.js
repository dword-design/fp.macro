export default (reference, t) =>
  reference.parentPath.replaceWith(
    t.arrowFunctionExpression(
      [t.identifier('x')],
      t.binaryExpression(
        '+',
        t.identifier('x'),
        ...reference.parentPath.node.arguments
      )
    )
  )
