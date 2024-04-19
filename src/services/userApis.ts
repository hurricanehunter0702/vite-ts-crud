export async function fetchUsersApi() {
  console.log('fetchUsers :>> ');
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`)
  return res.json()
}

export async function deleteUserApi(id: number) {
  console.log('deleteUser :>> ');
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
    method: 'DELETE'
  })
  return res.json()
}

export async function addUserApi({name, id}: {name: string, id: number}) {
  console.log('addUser :>> ');
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, id})
  })
  return res.json()
}

export async function editUserApi({id, name}: {id: number, name: string}) {
  console.log('editUser :>> ');
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      name
    })
  })
  res.json()
}

export async function fetchUserApi(id: number) {
  console.log('fetchUser :>> ');
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`)
  return res.json()
}