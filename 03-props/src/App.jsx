import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Gopal" age={23} img="https://images.unsplash.com/photo-1764549906172-0153db0825bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzZ8fHxlbnwwfHx8fHw%3D" />
      <Card   user="Arun" age={25} img="https://media.istockphoto.com/id/498457482/photo/gemstones-background-diamond-amethyst.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxTJwwGL-1ojBi3pZ9RldvT5dGksz8B6tcYqlHP3bCU=" />
      <Card user="Priyanka" age={24} img="https://images.unsplash.com/photo-1771607508623-1971c3f3bf7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NTZ8fHxlbnwwfHx8fHw%3D" />
    </div>
  )
}

export default App
