import React from 'react'
import './App.css'
import SideBar from './SideBar/SideBar'
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Education  from './Components/Education/Education';
import Blogs from './Components/Blogs/Blogs'
const App = () => {
  return (
    <>
    <Routing>
    <div style={{ display: 'flex' }}>
      <SideBar/>
      <Routes>
        <Route  index element= {<AboutMe/>} />
        <Route path='skills' element={<Skills/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="education" element={<Education/>} />
        <Route path='blogs' element={<Blogs/>} />
      </Routes>
      </div>
    </Routing>
    </>
  )
}

export default App
