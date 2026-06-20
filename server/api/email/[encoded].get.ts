export default defineEventHandler((event) => {
  const { encoded } = getRouterParams(event)
  if (!encoded || typeof encoded !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Missing encoded parameter' })
  }
  let email: string
  try {
    email = atob(encoded)
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Invalid base64' })
  }
  if (!email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' })
  }
  return sendRedirect(event, `mailto:${email}`, 302)
})
