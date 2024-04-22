import { Link } from "react-router-dom"

import { User } from "../types.ts"
import { useDeleteUser } from "../hooks/mutations.ts"

export default function UsersTable ({users}: {users: User[]}) {
  const {
    mutate: deleteUser,
  } = useDeleteUser()

  const onDelete = (id: string) => {
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
          users.length ? users.map((user, idx) =>
            (
              <tr key={user.id}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>Edit</Link>{' '}
                  <button onClick={() => onDelete(user.id)} type='button'>Delete</button>
                </td>
              </tr>
            )
          )
          : <tr>
            <td colSpan={3} style={{textAlign: 'center', color: 'lightpink'}}>No users</td>
          </tr>
        }
      </tbody>
    </table>
  )
}