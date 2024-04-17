export const getIdFromUrl = (urlText: string): {id: number} => {
  const url = new URL(urlText)
  const parts = url.pathname.split('/')
  const id = Number(parts[parts.length - 1])

  return {id}
}