import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { APP_PATHS } from 'paths'

import {
  HomePage,
  NFTList,
  CharacterPersonallity,
  CharacterStory,
  Chat,
} from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={APP_PATHS.home} element={<HomePage />} />
        <Route path={APP_PATHS.nftList} element={<NFTList />} />
        <Route
          path={APP_PATHS.nftCharacteristics}
          element={<CharacterPersonallity />}
        />
        <Route path={APP_PATHS.nftStory} element={<CharacterStory />} />
        <Route path={APP_PATHS.nftChat} element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
