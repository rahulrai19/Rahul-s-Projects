import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Tours from './component/Tours.jsx'
import Services from './component/Services.jsx'
import Footer from './component/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <Navbar/>
   <Home/>
   <About/>
   <Tours/>
  <Services/>
  <Footer/>
  </>
  )
}

export default App
