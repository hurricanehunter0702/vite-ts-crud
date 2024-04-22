import { v4 as uuidv4 } from 'uuid'
import { Link } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { Input } from "../types.ts";
import UserForm from "../components/UserForm.tsx";
import { useAddUser } from "../hooks/mutations.ts";

export default function Add() {

  const onSubmit:SubmitHandler<Input> = (data) => {
    addUser({name: data.name, id: uuidv4()})
  }

  const {
    mutate: addUser
  } = useAddUser()

  return (
    <div>
      <h1>Add</h1>
      <UserForm onSubmit={onSubmit} />
      <br />
      <Link to="/">Home</Link>
    </div>
  )
}