import { FormEvent } from "react";
import { Link} from "react-router-dom";
import { useAdd } from "../hooks/useAdd";
import { useFetch } from "../hooks/useFetch";

export default function Add () {
  const {length} = useFetch()

  const addUser = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement);
    useAdd({name: formData.get('name') as string, length})
  }

  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={addUser}>
        <input name='name' placeholder="Name..." />{' '}
        <input type="submit" />
      </form>
      <br />
      <Link to="/">Home</Link>
    </div>
  )
}