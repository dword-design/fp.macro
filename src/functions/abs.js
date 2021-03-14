export default (reference, t) =>
  reference.replaceWith(
    t.memberExpression(t.identifier('Math'), t.identifier('abs'))
  )
