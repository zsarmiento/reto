import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Menu } from './Components/Menu/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header/>
      
      </div>
      
    </>
  )
}

export default App
