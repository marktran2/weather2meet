import React from "react";


const Info = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-row justify-center">
        <p className="text-6xl mx-10">✈️</p>
        <p className="text-6xl mx-10">🚗</p>
        <p className="text-6xl mx-10">🚊</p>
      </div>
      <h1 className="p-10 text-center text-2xl font-semibold">weather's got you feeling down?</h1>
      <div className="flex justify-around">
        <div className="flex flex-col text-base">
          <p>Don't worry - we got you sorted!</p>
          <p>The better alternative to figuring out
            <i>when to meet</i> is <br></br><b>weather to meet</b> (get it?)</p>
        </div>
      </div>
    </div>
  )
}

export default Info