import React, { useState, useEffect } from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
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
  }, [nasaEndpoint, nasaApiKey]);


  return (
    <div className="App-body" data-testid="app-body">
      <Header data-testid="header"/>
      <Main data-test id="main" 
        nasaEndpoint={nasaEndpoint} 
        nasaApiKey={nasaApiKey} 
        onSelect={setSelectedMedia}
        loadingMedia={setLoading}
        media={selectedMedia}
        loading={loading}
      />
      <Footer data-testid="footer"/>
    </div>
  );
}
export default App;
