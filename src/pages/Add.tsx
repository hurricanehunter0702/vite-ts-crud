import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import { useAddUser } from "../hooks/mutations";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../types";

export default function Add() {
  const {
    register,
    handleSubmit,
  } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = (data) => {
    addUser({name: data.name, id: uuidv4()})
  }
  const {
    mutate: addUser
  } = useAddUser()

  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <input type="submit" />
      </form>
      <br />
      <Link to="/">Home</Link>
    </div>
  )
}