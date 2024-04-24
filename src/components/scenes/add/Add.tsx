import { v4 as uuidv4 } from 'uuid'
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { Button } from '@mui/material';

import Loading from '../../Loading.tsx';
import { Input } from '../../../types.ts';
import UserForm from '../../UserForm.tsx'; 
import Title from '../../common/Title.tsx'; 
import { useAddUser } from '../../../hooks/mutations.ts'; 

export default function Add() {
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()

  const onSubmit:SubmitHandler<Input> = (data) => {
    addUser({name: data.name, id: uuidv4()})
    if (isPending) <Loading />
    else if (isError) enqueueSnackbar(isError.message, {variant: 'error'})
    else enqueueSnackbar('User added', {variant:'success'})
  }

  const {
    mutate: addUser,
    isPending,
    isError
  } = useAddUser()

  return (
    <div>
      <Title>Add</Title>
      <UserForm onSubmit={onSubmit} />
      <br />
      <Button variant="contained" onClick={() => navigate("/")}>Home</Button>
    </div>
  )
}