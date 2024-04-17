export const useAdd = ({name, length}: {name: string, length: number}) => {
  fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, id: length})
  }).then(res => {
    if (!res.ok) {
      throw Error('Failed to add user')
    }
    return res.json();
  }).then(() => {
  }).catch(err => {
    console.error('err :>> ', err);
  })
}