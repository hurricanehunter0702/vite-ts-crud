import { useNavigate } from "react-router-dom"

import { Button } from "@mui/material"

import Error from "../components/Error.tsx"
import { useUsers } from "../hooks/queries.ts"
import Loading from "../components/Loading.tsx"
import UsersTable from "../components/UsersTable.tsx"

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
      <div className='container'>
        <h1>React + Vite + Typescript CRUD</h1>
        <Button variant="contained" onClick={() => navigate('/add')}>Add</Button>
        <br />
        <br />
        <UsersTable users={users} />
      </div>
    )
  }

}