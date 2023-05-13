// import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_PATHS } from 'paths'
import { Login } from '../components/authentication/login'

export const CharacterPersonallity = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }
  }, [navigate])

  // const [characterstics, setCharacterstics] = useState()

  // const buildCharacterPersona = async (nftCollectionAddress, nftId) => {
  //   const endpoint = '/api/buildNftCharacterCharacteristics'
  //   const fullEndpoint = `${endpoint}?nftCollectionAddress=${nftCollectionAddress}&nftId=${nftId}`
  //   const { data } = await axios.get(fullEndpoint)

  //   setCharacterstics(data)
  // }

  // useEffect(() => {
  //   buildCharacterPersona()
  // }, [])

  return (
    <div>
      Character Personallity
      <Login />
    </div>
  )
}
