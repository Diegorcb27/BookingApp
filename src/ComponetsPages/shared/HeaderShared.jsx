import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderShared.css"

const HeaderShared = () => {
  return (
    <header className='container_header'>
        <h1><Link to="/"  className='booking_title'>Booking<span className='booking_title_app'>App</span> </Link></h1>
        <nav>
            <ul className='container_list'>
                <li><Link to='/reservations' className='list_nav'>Reservations</Link></li>
                <li><Link to='/register' className='list_nav'>Register</Link></li>
                <li><Link to='/login' className='list_nav'>Login</Link></li>
                <li><Link to='/welcome' className='list_nav'>Profile</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared