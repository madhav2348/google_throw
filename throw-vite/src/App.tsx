import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Window from './app/Window'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Window/>
  )
}

export default App
