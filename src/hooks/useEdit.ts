export const useEdit = ({id, name}: {id: number, name: string}) => {
  fetch(`http://localhost:3030/users/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      name
    })
  }).then(res => {
    if (!res.ok) {
      throw Error('Failed to update user')
    }
    return res.json()
  }).then(data => {
    console.log('data :>> ', data);
  })
}