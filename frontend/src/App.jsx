import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';
import './App.css';


function App() {
  

  return (
    <div className='App'>
      <Router>
      <AuthProvider>
        <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/:url' element={<VideoMeetComponent />} />
        <Route path='/history' element={<History />} />
        <Route path='/home' element={<HomeComponent />} />
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  )
}

export default App
