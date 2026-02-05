import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Effects from './effects'
import './App.css'
import NoFetcher from './No'
import "./NoForm.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NoFetcher/>
    </>
  )
}

export default App
