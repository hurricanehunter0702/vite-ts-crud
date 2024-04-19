import { useMutation, useQuery } from "@tanstack/react-query"
import { ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { editUserApi, fetchUserApi } from "../services/userApis" 
import { getIdFromUrl } from "../utils/getIdFromUrl"

export default function Edit () {
  const {id} = getIdFromUrl(window.location.href)

  const {
    data: selectedUser
  } = useQuery({ queryKey: ['fetchUser'], queryFn: () => fetchUserApi(id) })

  const {
    mutate: editUser
  } = useMutation({ mutationKey: ['editUser'], mutationFn: editUserApi })

  const onEdit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    editUser({id, name: formData.get('name') as string})
  }

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={onEdit}>
        <input name="name" placeholder="Name..." defaultValue={selectedUser?.name} />{' '}
        <input type="submit" />
      </form>
      <br />
      <Link to='/'>Home</Link>
    </div>
  )
}