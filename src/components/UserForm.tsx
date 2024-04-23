import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { TextField } from "@mui/material";

import { Input } from "../types.ts";

const Form = ({children, onSubmit}: {children: ReactNode, onSubmit: () => {}}) => (
  <form onSubmit={onSubmit}>
    {children}
  </form>
)

export default function UserForm({onSubmit, defaultValue}: {onSubmit: SubmitHandler<Input>, defaultValue?: string}) {
  const {
    register,
    handleSubmit,
  } = useForm<Input>()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField variant="outlined" {...register('name')} defaultValue={defaultValue} />
      {/* <input {...register('name')} defaultValue={defaultValue} /> */}
      <TextField variant="outlined" type="submit" />
    </Form>
  )
}