import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg pt-12">
      <form className="my-3">
        <input
          placeholder="Where to?"
          type="text"
          autoComplete="off"
          className="w-80 p-5 border-[1px] border-solid border-black-200 outline-none"
        ></input>
      </form>
      <div className="flex flex-row justify-around">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label="Date"
          />
          <TimePicker
            label="Time"
            viewRenderers={{
              hours: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
      </div>
      <button className="rounded-lg text-white bg-tan py-4 px-10 my-10">
        Rate compatibility
      </button>
      
    </div>
  )
}

export default Form