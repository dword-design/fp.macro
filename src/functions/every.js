export default (reference, t) =>
  reference.parentPath.replaceWith(
    t.arrowFunctionExpression(
      [t.identifier('x')],
      t.callExpression(
        t.memberExpression(t.identifier('x'), t.identifier('every')),
        reference.parentPath.node.arguments
      )
    )
  )
