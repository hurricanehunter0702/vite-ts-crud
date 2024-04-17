import { Link } from "react-router-dom"
import UsersTable from "../components/UsersTable"
import { useFetch } from "../hooks/useFetch"

export default function Home () {
  const {users} = useFetch()

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