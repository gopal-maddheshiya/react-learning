import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  const user = 'Gopal'
  const age = 23
  return (
    <div>
      <Navbar />
      <Card />
    </div>
  )
}

export default App
