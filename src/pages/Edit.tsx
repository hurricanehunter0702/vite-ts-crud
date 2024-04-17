import { ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { useEdit } from "../hooks/useEdit"
import { useFetchOne } from "../hooks/useFetchOne"
import { getIdFromUrl } from "../utils/getIdFromUrl"

export default function Edit () {
  const {id} = getIdFromUrl(window.location.href)

  const {user} = useFetchOne(id)

  const onEdit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    useEdit({id, name: formData.get('name') as string})
  }

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={onEdit}>
        <input name="name" placeholder="Name..." defaultValue={user.name} />{' '}
        <input type="submit" />
      </form>
      <br />
      <Link to='/'>Home</Link>
    </div>
  )
}