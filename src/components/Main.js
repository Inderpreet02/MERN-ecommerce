import React from 'react'
import Hero from './Hero'
import './Main.css'
import { Navbar } from './Navbar'
import { Section } from './Section'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'

export const Main = ({user, setUser, cart, setCart}) => {
  return (
    <div className='Main'>
        <Hero />
        {
          user && 
          <div className="temp">
            Welcome {user?.email}
        </div>
        }
        <Section cart={cart} setCart={setCart}/>
        <Section1 cart={cart} setCart={setCart}/>
        <Section2 cart={cart} setCart={setCart}/>
        <Section3 cart={cart} setCart={setCart}/>
    </div>
  )
}
