import React from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Artist from './pages/Artist.jsx'
import Artists from './pages/Artists.jsx'
import Song from './pages/Song.jsx'
import Songs from './pages/Songs.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/artist:id' element={<Artist/>}></Route>
          <Route path='/artists' element={<Artists/>}></Route>
          <Route path='/song:id' element={<Song/>}></Route>
          <Route path='/songs' element={<Songs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
