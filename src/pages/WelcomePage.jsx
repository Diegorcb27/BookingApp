import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
    const navigate=useNavigate()

    const handleLogout=()=>{
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      navigate("/")
    
    }
    
    if(localStorage.getItem("token")){
    
      const user = JSON.parse(localStorage.getItem("user")) //el JSON parse convierte en un el uer que esta en string en el localStorage a objeto de js
    
        return(
          <div>
            <h2>Welcome {user?.firstName + " " + user?.lastName}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )
    }
}

export default WelcomePage