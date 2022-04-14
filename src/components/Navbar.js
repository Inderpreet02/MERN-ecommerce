import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav__container">
            <h1 className="nav__heading">PlantBase</h1>
            <div className="nav__links">
                <ul>
                    <li className="nav__link">Login</li>
                    <li className="nav__link">SignUp</li>
                    <li className="nav__link">Cart</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
