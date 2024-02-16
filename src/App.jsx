import { useState } from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Team from './Team/Team.jsx'
import About from './Team/About.jsx'
import Application from './Components/Application'
import MyExperience from './Components/MyExperience'
import VoluntaryDisclosures from './Components/VoluntaryDisclosures'
import ApplicationQuestions from './Components/ApplicationQuestions'
import LongTerm from './CardData/LongTerm.jsx'
import Customer from './CardData/Customer.jsx'
import RD from './CardData/RD.jsx'


function App() {
  
  return (
    <>
     <div>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<RD/>}/>
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
