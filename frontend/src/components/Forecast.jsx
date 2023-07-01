import React from "react";


const Forecast = (props) => {

  const dataFC = props.data.map(item => {
    return (
      <div>
        <span>{item.date} {item.condition}</span>
      </div>
    )
  })

  return (
    <div className="text-black">
      <p>{dataFC}</p>
      <p>{props.date}</p>
      <p>{props.time}</p>
    </div>
  )
}

export default Forecast