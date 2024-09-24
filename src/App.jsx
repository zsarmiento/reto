import { useState } from 'react'
import { Header } from './components/Header'
import { Rol } from './components/Rol'
import { AboutMe } from './components/AboutMe'
import { Reviews } from './components/Reviews'
function App() {
    return (
  
      <div >
          <Header />
          <Rol />
          <AboutMe/>
          <Reviews/>
      </div>
  )
}

export default App
