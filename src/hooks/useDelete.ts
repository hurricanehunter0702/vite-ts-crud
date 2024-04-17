export const useDelete = (id: number) => {
  fetch(`http://localhost:3030/users/${id}`, {
    method: 'DELETE'
  }).then(res => {
    if (!res.ok) {
      throw Error('Failed to delete user')
    }
    return res.json()
  }).then(data => {
    console.log('data :>> ', data);
  }).catch(err => {
    console.log('err :>> ', err);
  })
}