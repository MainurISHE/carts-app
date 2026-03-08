import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import type { IUser } from "../../types/user.ts";

export default function UserPage() {

  const { id } = useParams()

  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {

    async function loadUser() {

      const res = await fetch(`https://dummyjson.com/users/${id}`)
      const data = await res.json()

      setUser(data)

    }

    loadUser()

  }, [id])

  if (!user) return <div>loading...</div>

  return (

    <Box sx={{ p: 3 }}>

      <Typography variant="h4">
        Профиль покупателя
      </Typography>

      <Typography>Name: {user.firstName}</Typography>
      <Typography>Last name: {user.lastName}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Age: {user.age}</Typography>
      <Typography>Gender: {user.gender}</Typography>
      <Typography>Username: {user.username}</Typography>
      <Typography>Birth Date: {user.birthDate}</Typography>
      <Typography>Height: {user.height}</Typography>
      <Typography>Weight: {user.weight}</Typography>
      <Typography>Eye Color: {user.eyeColor}</Typography>

    </Box>
  )
}