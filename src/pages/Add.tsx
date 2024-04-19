import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import { useAddUser } from "../hooks/mutations";

export default function Add() {
  const {
    mutate: addUser
  } = useAddUser()

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement);
    addUser({name: formData.get('name') as string, id: uuidv4()})
  }

  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={onSubmit}>
        <input name='name' placeholder="Name..." />{' '}
        <input type="submit" />
      </form>
      <br />
      <Link to="/">Home</Link>
    </div>
  )
}