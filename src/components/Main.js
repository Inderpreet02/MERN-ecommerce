import React from 'react'
import Hero from './Hero'
import './Main.css'
import { Navbar } from './Navbar'

export const Main = () => {
  return (
    <div className='Main'>
        <Navbar/>
        <Hero/>
    </div>
  )
}
