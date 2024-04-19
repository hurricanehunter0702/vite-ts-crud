import { useQuery } from "@tanstack/react-query"
import { fetchUsersApi, fetchUserApi } from "../services/userApis"

export const useUsers = () => {
  return useQuery({ queryKey: ['users'], queryFn: fetchUsersApi })
}

export const useUser = (id: string) => {
  return useQuery({ queryKey: ['user', id], queryFn: () => fetchUserApi(id) })
}