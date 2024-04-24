import { useSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"
import { SubmitHandler } from "react-hook-form"

import { Button } from "@mui/material"

import Loading from "../../Loading.tsx"
import { Input } from '../../../types.ts'
import UserForm from "../../UserForm.tsx"
import Title from "../../common/Title.tsx"
import { useUser } from "../../../hooks/queries.ts"
import { useEditUser } from "../../../hooks/mutations.ts"
import { getIdFromUrl } from "../../../utils/getIdFromUrl.ts"

export default function Edit () {
  const {id} = getIdFromUrl(window.location.href)
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()

  const {
    isLoading,
    data: selectedUser
  } = useUser(id)

  const {
    mutate: editUser,
    isError,
    isPending
  } = useEditUser()

  const onSubmit: SubmitHandler<Input> = (data) => {
    editUser({id, name: data.name})
    if (isPending) <Loading />
    else if (isError) enqueueSnackbar(isError.message, {variant: 'error'})
    else enqueueSnackbar('User updated', {variant:'success'})
  }

  return (
    <div>
      <Title>Edit</Title>
      {
        isLoading ? <Loading /> : <UserForm onSubmit={onSubmit} defaultValue={selectedUser?.name} />
      }
      <br />
      <Button variant="contained" onClick={() => navigate("/")}>Home</Button>
    </div>
  )
}