import { FormEvent } from "react";
import { Link, useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from '@tanstack/react-query'
import { addUserApi } from "../services/userApis";
import { v4 as uuidv4 } from 'uuid'

export default function Add() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    mutate: addUser
  } = useMutation({
    mutationFn: addUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      navigate('/')
    }
  })

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