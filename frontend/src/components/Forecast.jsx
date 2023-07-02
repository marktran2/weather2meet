import React from "react";


const Forecast = (props) => {

  const dateSubStr = props.date.substring(4, 15)

  const date = new Date(dateSubStr)
  const dateFormat = date.getFullYear() + "-" + (date.getMonth()+1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0")

  const dataFC = props.data.filter(
    item => item.date.includes(dateFormat)
  ).map(item => {
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