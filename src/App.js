
import './App.css';

//Import the base pages from the components

import React from 'react'
import About from './components/pages/About'
import Navbar from './components/pages/Navbar'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'



export default function App() {
  return (
    <main className='text-gray coolGradient'>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </main>
  )
}


