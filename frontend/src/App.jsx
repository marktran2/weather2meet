import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Info from './components/Info'

function App() {

  const [displayInfo, setDisplayInfo] = useState(true);
  const [submitToggle, setSubmitToggle] = useState(true);
  const [queryStr, setQueryStr]= useState("");

  const handleSubmit = (qry) => {
    setDisplayInfo(false);
    setSubmitToggle(prev => !prev)
    setQueryStr(qry)
    console.log(qry)
  }

  return (
    <div className="">
      <Navbar/>
      <Form 
        handleSubmit={handleSubmit} 
        toggle={submitToggle} 
        queryStr={queryStr}
        displayInfo={displayInfo}
      />
      {displayInfo && <Info/>}
    </div>
  )
}

export default App
