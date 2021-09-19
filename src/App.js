import React, { useState, useEffect } from 'react';
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

import './App.css';
//icon imports
import HourglassIcon from '@material-ui/icons/HourglassEmpty';
//date picker imports
import DateAdapter from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab' 
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@material-ui/core/TextField';


function App() {

  const [ selectedMedia, setSelectedMedia ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ startDate, setStartDate ] = useState(new Date())
  const nasaEndpoint=process.env.REACT_APP_NASA_ENDPOINT
  const nasaApiKey=process.env.REACT_APP_NASA_API_KEY


  useEffect (() => {
    setLoading(true)
    fetch(`${nasaEndpoint}planetary/apod/?api_key=${nasaApiKey}`)
    .then((response) => response.json())
    .then((data) => {
      setSelectedMedia(data)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false);
    });
  }, [nasaEndpoint, nasaApiKey]);

  const handleDateChange = (date) => {
    setStartDate(date)
    setLoading(true);
    const parsedDate= date.toISOString().slice(0,10);
    console.log(date, parsedDate)
    fetch(`${nasaEndpoint}planetary/apod/?api_key=${nasaApiKey}&date=${parsedDate}`)
    .then((response) => response.json())
    .then((dateData) => {
      setSelectedMedia(dateData)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="container-body">
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker 
            label="Pick a date"
            value={startDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        { (selectedMedia!==undefined) 
          ? <Card media={selectedMedia}/> 
          : <div className='app-loading'><HourglassIcon/> Data is loading...</div> 
        }
      </div>
      <Footer />
    </div>
  );
}
export default App;
