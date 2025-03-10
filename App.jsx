import { useState } from 'react'
import './App.css'
import { NavbarComponent } from './components/navbar'
import { HeroProfile } from './components/Hero'
function App() {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center'>
        <NavbarComponent/>
        <HeroProfile/>
      </div>
    </>
  )
}

export default App
