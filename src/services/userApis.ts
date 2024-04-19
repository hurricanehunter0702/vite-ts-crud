import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
})

export async function fetchUsersApi() {
  console.log('fetchUsers :>> ');
  const {data} = await http.get('/users?_sort=name')
  return data
}

export async function deleteUserApi(id: string) {
  console.log('deleteUser :>> ');
  const {data} = await http.delete(`/users/${id}`)
  return data
}

export async function addUserApi({name, id}: {name: string, id: string}) {
  console.log('addUser :>> ');
  const {data} = await http.post('/users', JSON.stringify({name, id}))
  return data
}

export async function editUserApi({id, name}: {id: string, name: string}) {
  console.log('editUser :>> ');
  const {data} = await http.patch(`users/${id}`, JSON.stringify({name}))
  return data
}

export async function fetchUserApi(id: string) {
  console.log('fetchUser :>> ');
  const {data} = await http.get(`/users/${id}`)
  return data
}