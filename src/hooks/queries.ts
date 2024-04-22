import { useQuery } from "@tanstack/react-query"

import { fetchUserApi, fetchUsersApi } from "../services/userApis.ts"

export const useUsers = () => useQuery({ queryKey: ['users'], queryFn: fetchUsersApi })

export const useUser = (id: string) => useQuery({ queryKey: ['user', id], queryFn: () => fetchUserApi(id) })