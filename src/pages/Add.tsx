import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import { useAddUser } from "../hooks/mutations";
import { SubmitHandler } from "react-hook-form";
import { Input } from "../types";
import UserForm from "../components/UserForm";

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