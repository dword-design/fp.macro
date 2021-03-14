export default (reference, t) =>
  reference.parentPath.replaceWith(
    t.arrowFunctionExpression(
      [t.identifier('x')],
      t.callExpression(
        t.memberExpression(
          t.callExpression(
            t.memberExpression(t.identifier('Object'), t.identifier('entries')),
            [t.identifier('x')]
          ),
          t.identifier('reduce')
        ),
        [
          t.arrowFunctionExpression(
            [t.identifier('object'), t.identifier('entry')],
            t.objectExpression([
              t.spreadElement(t.identifier('object')),
              t.objectProperty(
                t.memberExpression(t.identifier('entry'), t.identifier('key')),
                t.callExpression(reference.parentPath.node.arguments[0], [
                  t.memberExpression(
                    t.identifier('entry'),
                    t.identifier('value')
                  ),
                ]),
                true
              ),
            ])
          ),
        ]
      )
    )
  )
