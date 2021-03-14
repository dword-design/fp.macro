export default (reference, t) =>
  reference.replaceWith(
    t.arrowFunctionExpression(
      [t.identifier('x')],
      t.callExpression(
        t.memberExpression(t.identifier('x'), t.identifier('flatten')),
        []
      )
    )
  )
