import Navbar from './components/navbar'
import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skill'
import Mywork from './pages/Mywork'
import {Routes,Route} from "react-router-dom"
import Layout from './Layout'
import ResourceSharingProject from './components/ResourceSharing'
import HelpingHand from './components/HelpingHand'
import Library from './components/Library'

import Contact from './pages/Contact'
import Certificates from './pages/Certificates'
import Todo from './components/Todo'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        <Route path="/" element={<Hero />}></Route>
        <Route path="Home" element={<Hero />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Skills" element={<Skills />}></Route>
        <Route path="Project" element={<Mywork />}></Route>
        <Route path='/shareNest' element={<ResourceSharingProject />}></Route>
        <Route path='/helpingHand' element={<HelpingHand />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/certificates' element={<Certificates />}></Route>
        <Route path='/Todo' element={<Todo/>}></Route>
        {/* <Route path="Library" element={<Library />}></Route> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App
