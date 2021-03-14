export default (reference, t) =>
  reference.replaceWith(
    t.memberExpression(t.identifier('Object'), t.identifier('fromEntries'))
  )
