import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
 if(localStorage.getItem("token")){   //esto es para hacer la ruta protegida de reervations 
    return <Outlet/>
 }else{
    return <Navigate to="/login"/>
 }
}

export default ProtectedRoutes