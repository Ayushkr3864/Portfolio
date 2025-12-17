import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,BrowserRouter } from 'react-router-dom'
import App from './App'
// import About from './components/About'
// import Layout from "./Layout"
// import Hero from './components/Hero'
// import Skills from './components/Skill'
// import Mywork from './components/Mywork'
// import Library from './components/Library'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Hero />}></Route>
//       <Route path='Home' element={<Hero/>}></Route>
//       <Route path='About' element={<About />}></Route>
//       <Route path='Skills' element={<Skills />}></Route>
//       <Route path='Project' element={<Mywork />}></Route>
//       <Route path='Library' element={<Library/>}></Route>
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={ router} /> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
