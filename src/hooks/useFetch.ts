import { useState, useEffect } from "react"
import { User } from "../types"

export function useFetch(): {users: User[], length: number} {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('http://localhost:3030/users').then(res => {
      if (!res.ok) {
        throw Error('Failed to fetch users')
      }
      return res.json()
    }).then(data => {
      setUsers(data)
    }).catch(err => {
      console.error('err :>> ', err);
    })
  }, [])

  return {users, length: users.length} 
}