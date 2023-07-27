import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentTokens,selectCurrentToken } from "features/auth/authSlice"
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const RequireAuth = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const token = localStorage.getItem('token')
    
    console.log(token)
    return (
        <div>
        { token
    ? <Outlet />
    : <Navigate to="/login-page" replace />
}
    </div>
    )
    
}
export default RequireAuth