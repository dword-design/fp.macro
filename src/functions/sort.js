export default (reference, t) =>
  reference.parentPath.type === 'CallExpression'
    ? reference.parentPath.replaceWith(
        t.arrowFunctionExpression(
          [t.identifier('x')],
          t.callExpression(
            t.memberExpression(
              t.arrayExpression([t.spreadElement(t.identifier('x'))]),
              t.identifier('sort')
            ),
            reference.parentPath.node.arguments
          )
        )
      )
    : reference.replaceWith(
        t.arrowFunctionExpression(
          [t.identifier('x')],
          t.callExpression(
            t.memberExpression(
              t.arrayExpression([t.spreadElement(t.identifier('x'))]),
              t.identifier('sort')
            ),
            []
          )
        )
      )
