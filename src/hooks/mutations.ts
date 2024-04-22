import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { addUserApi, editUserApi, deleteUserApi } from "../services/userApis.ts"

export const useAddUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['addUser'],
    mutationFn: addUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      navigate('/')
    }
  })
}

export const useEditUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['editUser'],
    mutationFn: editUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']})
      navigate('/')
    }
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteUserApi,
    onSettled: () => queryClient.invalidateQueries({queryKey: ['users']}),
  })
}