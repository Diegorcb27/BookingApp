import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderShared.css"

const HeaderShared = () => {
  return (
    <header className='container_header'>
        <h1 className='booking_title'><Link to="/">BookingApp</Link></h1>
        <nav>
            <ul className='container_list'>
                <li><Link to='/reservations'>Reservations</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/welcome'>Profile</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared