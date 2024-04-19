import { ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { useEditUser } from "../hooks/mutations"
import { useUser } from "../hooks/queries"
import { getIdFromUrl } from "../utils/getIdFromUrl"

export default function Edit () {
  const {id} = getIdFromUrl(window.location.href)

  const {
    data: selectedUser
  } = useUser(id)

  const {
    mutate: editUser
  } = useEditUser()

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