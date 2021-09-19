import React, { useState } from 'react'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab' 
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@material-ui/core/TextField';
import '../App.css';

export const Dates = ({ nasaEndpoint, nasaApiKey, onSelect }) => {

   const [ startDate, setStartDate ] = useState(new Date())

   const handleDateChange = (date) => {
      setStartDate(date)
      // setLoading(true);
      const parsedDate= date.toISOString().slice(0,10);
      console.log(date, parsedDate)
      fetch(`${nasaEndpoint}planetary/apod/?api_key=${nasaApiKey}&date=${parsedDate}`)
      .then((response) => response.json())
      .then((dateData) => {
        onSelect(dateData)
      })
      .catch((err) => {
        console.log(err)
      })
      // .finally(() => {
      //   setLoading(false);
      // });
    }
  
   return (
   <>
      <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker 
        label="Pick a date"
        value={startDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
   </>
   )
};