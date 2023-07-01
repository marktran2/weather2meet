import React, { useEffect, useRef, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios'
import backendURL from "../config";
import Forecast from "./Forecast";

const Form = (props) => {

  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(String(date.$d));
  };
  
  const handleTimeChange = (time) => {
    setSelectedTime(String(time.$d));
  };

  useEffect(() => {
    if (props.queryStr !== "") {
      axios.get(`${backendURL}/forecast?city=${props.queryStr}`)
      .then((response) => {
        setData(response.data.weather);
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }, [props.toggle]);

  return (
    <div className="flex flex-col justify-center items-center rounded-lg pt-12">
      <form className="my-3">
        <input
          ref={inputRef}
          placeholder="Where to? (Enter city)"
          type="text"
          autoComplete="off"
          className="w-80 p-5 border-[1px] border-solid border-black-200"
        ></input>
      </form>
      <div className="flex flex-row justify-around">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <TimePicker
            label="Time"
            value={selectedTime}
            onChange={handleTimeChange}
            viewRenderers={{
              hours: renderTimeViewClock
            }}
          />
        </LocalizationProvider>
      </div>
      <button 
        className="rounded-lg text-white bg-tan py-4 px-10 my-10"
        onClick={(event) => {
          event.preventDefault()
          props.handleSubmit(inputRef.current.value)
        }}
        >
        Rate compatibility
      </button>
      
      {! props.displayInfo && <Forecast date={selectedDate} time={selectedTime} data={data}/>}
    </div>
  )
}

export default Form