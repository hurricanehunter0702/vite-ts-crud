import { User } from "../types"
import { Link } from "react-router-dom"
import { deleteUserApi } from "../services/userApis" 
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function UsersTable ({users}: {users: User[]}) {
  const queryClient = useQueryClient()

  const {
    mutate: deleteUser,
  } = useMutation({
    mutationFn: deleteUserApi,
    onSettled: () => queryClient.invalidateQueries({queryKey: ['users']}),
  })

  const onDelete = (id: number) => {
    if (window.confirm('Are you sure?')) {
      deleteUser(id)
    }
  }

  return (
    <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length ? users.map((user, idx) => {
              return (
                <tr key={user.id}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    <Link to={`/edit/${user.id}`}>Edit</Link>{' '}
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
            : <tr>
              <td colSpan={3} style={{textAlign: 'center', color: 'lightpink'}}>No users</td>
            </tr>
          }
        </tbody>
      </table>
  )
}