export default (reference, t) =>
  reference.parentPath.replaceWith(
    t.arrowFunctionExpression(
      [t.identifier('x')],
      t.callExpression(
        t.memberExpression(t.identifier('x'), t.identifier('filter')),
        reference.parentPath.node.arguments
      )
    )
  )
