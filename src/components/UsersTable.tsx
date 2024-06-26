import { useSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"

import { Stack, Paper, Table, Button, TableRow, TableCell, TableHead, TableBody, TableContainer } from "@mui/material"

import { User } from "../types.ts"
import Loading from "./Loading.tsx"
import { useDeleteUser } from "../hooks/mutations.ts"

export default function UsersTable ({users}: {users: User[]}) {
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()
  const {
    mutate: deleteUser,
    isError,
    isPending
  } = useDeleteUser()

  const onDelete = async (id: string) => {
    if (window.confirm('Are you sure?')) {
      await deleteUser(id)
      if (isPending) <Loading />
      else if (isError) enqueueSnackbar(isError.message, {variant: 'error'})
      else enqueueSnackbar('User deleted', {variant:'success'})
    }
  }

  return (
    <TableContainer component={Paper} sx={{padding: 2, width: '100%'}} variant="outlined">
      <Table aria-label="dota heros table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.length ? users.map((user, idx) =>
              (
                <TableRow key={user.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>
                    <Stack spacing={2} direction="row">
                      <Button variant="outlined" color="warning" onClick={() => navigate(`/edit/${user.id}`)} size="small">Edit</Button>
                      <Button variant="outlined" color="error" onClick={() => onDelete(user.id)} size="small">Delete</Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              )
            )
            : <TableRow>
              <TableCell colSpan={3} style={{textAlign: 'center', color: 'lightpink'}}>No users</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}