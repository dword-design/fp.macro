export default (reference, t) =>
  reference.replaceWith(
    t.arrowFunctionExpression(
      [t.identifier('x')],
      t.callExpression(
        t.memberExpression(
          t.arrayExpression([t.spreadElement(t.identifier('x'))]),
          t.identifier('reverse')
        ),
        []
      )
    )
  )
