import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Info from './components/Info'
import Compatibility from './components/Compatibility';

function App() {

  const [displayInfo, setDisplayInfo] = useState(true);

  const handleSubmit = () => {
    setDisplayInfo(false);
  }

  return (
    <div className="">
      <Navbar/>
      <Form handleSubmit={handleSubmit} />
      {displayInfo ? <Info/> : <Compatibility />}
    </div>
  )
}

export default App
