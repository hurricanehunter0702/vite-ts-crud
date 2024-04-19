import { Link } from "react-router-dom"
import Error from "../components/Error"
import Loading from "../components/Loading"
import UsersTable from "../components/UsersTable"
import { useUsers } from "../hooks/queries"

export default function Home () {
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
        <Link to='/add'>Add</Link>
        <br />
        <br />
        <UsersTable users={users} />
      </div>
    )
  }

}