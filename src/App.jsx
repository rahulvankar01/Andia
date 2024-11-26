import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Slider from './component/Slider'
import Nav from './component/Nav'
import Andi from './component/Andi'
import Work1 from './component/Work1'
import Work from './component/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Nav></Nav>
     <Routes>
      <Route path='home' Component={Slider}/>
      <Route path='Portfolio' Component={Andi}/>
      <Route path='Blog' Component={Work}/>
      <Route path='Services' Component={Work1}/>
      <Route path='About' Component={Slider}/>
      <Route path='Contact' Component={Slider}/>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
