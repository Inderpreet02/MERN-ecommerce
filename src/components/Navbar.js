import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

export const Navbar = ( {user, setUser, cart} ) => {

  const navigate = useNavigate();

  const logout = () => {

    setUser(null);
    navigate('/')
  }

  console.log(cart);
  return (
    <div className='nav'>
        <div className="nav__container">
          <Link to='/'>
            <h1 className="nav__heading">PlantBase</h1>

          </Link>
            <div className="nav__links">
                <ul>
                    <li className="nav__link">{!user ? <Link to='/login'>Login</Link> : <p onClick={logout}>Logout</p>}</li>
                    <li className="nav__link"><Link to='/create'>Create</Link></li>
                    <li className="nav__link"><Link to='/cart'>Cart {cart?.length}</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
