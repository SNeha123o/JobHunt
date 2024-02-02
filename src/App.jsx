import { useState } from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import './App.css'
import Modal from './Components/Modal'
import Application from './Components/Application'
import MyExperience from './Components/MyExperience'
import VoluntaryDisclosures from './Components/VoluntaryDisclosures'
import ApplicationQuestions from './Components/ApplicationQuestions'

function App() {
  
  return (
    <>
     <div>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Application/>}/>
          <Route path='/experience' element={<MyExperience/>}/>
          <Route path='/voluntary' element={<VoluntaryDisclosures/>}/>
          <Route path='/questions' element={<ApplicationQuestions/>}/>
        </Routes>
      </div>
    </BrowserRouter> 
    </div>
    </>
  )
}

export default App
