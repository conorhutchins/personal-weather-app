import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { MainView } from './views/MainView/MainView';
import { DetailsView } from './views/DetailsView/DetailsView'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import { WeatherProvider } from './context/WeatherProvider'
import './App.css'

function App() {
  return (
<Router>
  <h1>Weather</h1>
  <h2>United Kingdom</h2>
  <div className="time">{new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
  <div className="container">
    <Routes>
      <Route path="/" element={<MainView />}/>
      <Route path="details/:cityName" element={<DetailsView />}/>
    </Routes>
  </div>
</Router>
  )
}

export default App;
