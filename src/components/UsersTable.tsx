import { useNavigate } from "react-router-dom"

import { Stack, Button } from "@mui/material"

import { User } from "../types.ts"
import { useDeleteUser } from "../hooks/mutations.ts"

export default function UsersTable ({users}: {users: User[]}) {
  const navigate = useNavigate()
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
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined" color="warning" onClick={() => navigate(`/edit/${user.id}`)} size="small">Edit</Button>
                    <Button variant="outlined" color="error" onClick={() => onDelete(user.id)} size="small">Delete</Button>
                  </Stack>
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