export const getIdFromUrl = (urlText: string): {id: string} => {
  const url = new URL(urlText)
  const parts = url.pathname.split('/')
  const id = parts[parts.length - 1]

  return {id}
}