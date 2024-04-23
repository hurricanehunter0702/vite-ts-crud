import { useNavigate } from "react-router-dom"

import { Button } from "@mui/material"

import Error from "../../Error.tsx"
import Loading from "../../Loading.tsx"
import Title from "../../common/Title.tsx"
import UsersTable from "../../UsersTable.tsx"
import { useUsers } from "../../../hooks/queries.ts"

export default function Home () {
  const navigate = useNavigate()
  const {
    isError,
    isLoading,
    data: users,
    isSuccess
  } = useUsers()

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return <Loading />
  }

  if (isSuccess) {
    return (
      <>
        <Title>React + Vite + Typescript CRUD</Title>
        <Button variant="contained" onClick={() => navigate('/add')}>Add</Button>
        <UsersTable users={users} />
      </>
    )
  }

}