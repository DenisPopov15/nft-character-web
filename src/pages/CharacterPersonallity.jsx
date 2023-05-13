import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APP_PATHS } from 'paths'
import { Login } from '../components/authentication/login'

export const CharacterPersonallity = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [characteristics, setCharacteristics] = useState()

  const { nftId } = params

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }

    const pulledCharacteristics = localStorage.getItem(nftId)
    // useBuildCharacterteristics
    setCharacteristics(pulledCharacteristics)
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
      {characteristics}
      Character Personallity
      <Login />
    </div>
  )
}
