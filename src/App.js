import React, { useState, useEffect } from 'react';
import { Header } from './components/Header'
import { Dates } from './components/Dates'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { LoadingAnimation } from './components/LoadingAnimation'
import './App.css';

function App() {

  const [ selectedMedia, setSelectedMedia ] = useState([]);
  const [ loading, setLoading ] = useState(false);
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
      setLoading(false)
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <div className="container-body">
        <Dates 
          nasaEndpoint={nasaEndpoint} nasaApiKey={nasaApiKey} 
          onSelect={setSelectedMedia}
          loadingMedia={setLoading}
        />
        { (!loading)
          ? <Card media={selectedMedia} /> 
          : <LoadingAnimation /> 
        }
      </div>
      <Footer />
    </div>
  );
}
export default App;
