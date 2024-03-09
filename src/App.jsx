import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Eyes2 from './components/Eyes2'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Foot'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen  text-dark '>
      <Navbar/>
      <Landing/>
      <About/>
      {/* <Marque/> */}
      <Eyes/>
      <Featured/>
      <Cards/>
      <Eyes2/>
      <Footer/>
    
      
    </div>
  )
}

export default App