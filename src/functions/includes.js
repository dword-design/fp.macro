export default (reference, t) =>
  reference.parentPath.replaceWith(
    t.arrowFunctionExpression(
      [t.identifier('x')],
      t.callExpression(
        t.memberExpression(t.identifier('x'), t.identifier('includes')),
        reference.parentPath.node.arguments
      )
    )
  )
