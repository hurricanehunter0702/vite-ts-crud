import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useEditUser } from "../hooks/mutations"
import { useUser } from "../hooks/queries"
import { Input } from "../types"
import { getIdFromUrl } from "../utils/getIdFromUrl"

export default function Edit () {
  const {id} = getIdFromUrl(window.location.href)

  const {
    register,
    handleSubmit
  } = useForm<Input>()

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} defaultValue={selectedUser?.name} />
        <input type="submit" />
      </form>
      <br />
      <Link to='/'>Home</Link>
    </div>
  )
}