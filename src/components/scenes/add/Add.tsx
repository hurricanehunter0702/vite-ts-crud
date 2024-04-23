import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { Button } from '@mui/material';

import { Input } from '../../../types.ts';
import UserForm from '../../UserForm.tsx'; 
import Title from '../../common/Title.tsx'; 
import { useAddUser } from '../../../hooks/mutations.ts'; 

export default function Add() {
  const navigate = useNavigate()

  const onSubmit:SubmitHandler<Input> = (data) => {
    addUser({name: data.name, id: uuidv4()})
  }

  const {
    mutate: addUser
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