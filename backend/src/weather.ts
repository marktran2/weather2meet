const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

async function weatherGet(city: string) {
  // console.log(city)
  const apiKey = process.env.API_KEY;

  const lonLatResp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
  const lonLatData = await lonLatResp.json();

  const longitude = lonLatData[0].lon
  const latitude = lonLatData[0].lat

  const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
  const data = await resp.json();

  const arr = [];
  for (const index of data.list) {
    arr.push({
      date: index.dt_txt,
      condition: index.weather[0].main
    })
  }
  // console.log(arr)
  return {
    weather: arr
  }
}

export default weatherGet