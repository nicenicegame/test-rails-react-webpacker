import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <h1>Hello, from React.</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autocomplete="off"
      />
      <h2>Your name go here! {name}</h2>
    </div>
  )
}

export default App
