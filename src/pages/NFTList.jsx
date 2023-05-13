import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_PATHS } from 'paths'
import { Login } from '../components/authentication/login'

export const NFTList = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }
  }, [navigate])

  return (
    <div>
      NFT LIST
      <Login />
    </div>
  )
}
