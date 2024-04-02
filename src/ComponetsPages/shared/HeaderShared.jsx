import React from 'react'
import { Link } from 'react-router-dom'

const HeaderShared = () => {
  return (
    <header>
        <h1><Link to="/">BookingApp</Link></h1>
        <nav>
            <ul>
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