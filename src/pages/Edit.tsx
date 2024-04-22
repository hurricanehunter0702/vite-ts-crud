import { useNavigate } from "react-router-dom"
import { SubmitHandler } from "react-hook-form"

import { Button } from "@mui/material"

import { Input } from "../types.ts"
import { useUser } from "../hooks/queries.ts"
import UserForm from "../components/UserForm.tsx"
import { useEditUser } from "../hooks/mutations.ts"
import { getIdFromUrl } from "../utils/getIdFromUrl.ts"

export default function Edit () {
  const {id} = getIdFromUrl(window.location.href)
  const navigate = useNavigate()

  const {
    data: selectedUser
  } = useUser(id)

  const {
    mutate: editUser
  } = useEditUser()

  const onSubmit: SubmitHandler<Input> = (data) => {
    editUser({id, name: data.name})
  }

  return (
    <div>
      <h1>Edit</h1>
      <UserForm onSubmit={onSubmit} defaultValue={selectedUser?.name} />
      <br />
      <Button variant="contained" onClick={() => navigate("/")}>Home</Button>
    </div>
  )
}