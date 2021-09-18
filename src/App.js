import React, { useState, useEffect } from 'react';
import { Card } from './components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faRocket } from '@fortawesome/free-solid-svg-icons'
import HourglassIcon from '@material-ui/icons/HourglassEmpty'

import TextField from '@material-ui/core/TextField'
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab' 
import DatePicker from '@mui/lab/DatePicker';


import './App.css';


function App() {

  const [ data, setData ] = useState([])
  // const [ image, setImage ] = useState()
  // const [ title, setTitle ] = useState('')
  // const [ date, setDate ] = useState('')
  // const [ like, setLike ] = useState(false)   
  // const [ userInput, setUserInput ] = useState('')
  
  const [ loading, setLoading ] = useState(false);
  const [ selectedMedia, setSelectedMedia ] = useState();
  const nasaEndpoint=process.env.REACT_APP_NASA_ENDPOINT
  const nasaApiKey=process.env.REACT_APP_NASA_API_KEY
  const [ startDate, setStartDate ] = useState(new Date())


  useEffect (() => {
    setLoading(true)
    fetch(`${nasaEndpoint}planetary/apod/?api_key=${nasaApiKey}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
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
    console.log()
    // setSelectedMedia()

  }


  // console.log("data media type: ", data.media_type)

  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={ faMeteor } />
        <span>Spacestagram</span>
        <FontAwesomeIcon icon={ faRocket } />
      </header>
      <div className="container-body">
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker 
                  label="Pick a date"
                  value={startDate}
                  format="YY-MM-DD"
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

          { (data!==undefined) ? <Card media={selectedMedia} data={data} /> : <div className='app-loading'><HourglassIcon/> Data is loading...</div> 
          }
      </div>
        <footer>
          Built by <a href="https://katarzyna-kw.github.io/portfolio-website/" target="blank"> Katarzyna Wegrzynowicz</a> using <a href="https://api.nasa.gov/" target="blank">NASA APOD API</a>
        </footer>
    </div>
  );
}
export default App;
