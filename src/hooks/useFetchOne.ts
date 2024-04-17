import { useEffect, useState } from "react"
import { User } from "../types"

export const useFetchOne = (id: number) => {
  const [user, setUser] = useState<User>({
    name: '',
    id: 0
  })
  useEffect(() => {
    fetch(`http://localhost:3030/users/${id}`).then(res => {
      if (!res.ok) {
        throw Error('failed to fetch a user')
      }
      return res.json()
    }).then(data => {
      setUser(data)
    }).catch(err => {
      console.log('err :>> ', err);
    })
  }, [])

  return {user}
}