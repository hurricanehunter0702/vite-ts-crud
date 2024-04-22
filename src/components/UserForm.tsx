import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../types.ts";

export default function UserForm({onSubmit, defaultValue}: {onSubmit: SubmitHandler<Input>, defaultValue?: string}) {
  const {
    register,
    handleSubmit,
  } = useForm<Input>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} defaultValue={defaultValue} />
      <input type="submit" />
    </form>
  )
}