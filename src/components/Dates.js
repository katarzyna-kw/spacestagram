import React, { useState, useEffect } from 'react'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab' 
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@material-ui/core/TextField';
import '../App.css';

export const Dates = ({ nasaEndpoint, nasaApiKey, onSelect, onLoad }) => {

   const [ startDate, setStartDate ] = useState(new Date())


   
  const updateMedia = async (parsedDate) => {
    return await fetch(`${nasaEndpoint}planetary/apod/?api_key=${nasaApiKey}&date=${parsedDate}`)
    .then(response => {
      return response.json()
    }).then((dateData) => {
      onSelect(dateData)
      console.log(dateData)
    })
    }

   const handleDateChange = (date) => {
      setStartDate(date)
      onLoad(true);
      const parsedDate= date.toISOString().slice(0,10);
      updateMedia(parsedDate)
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        onLoad(false);
      });
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