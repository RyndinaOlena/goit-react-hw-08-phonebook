import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import { selectAuthenticated } from 'redux/selectorsAuth'
const RestrictedRoute = ({ children, redirectTo = '/contact' }) => {
    const authenticated = useSelector(selectAuthenticated)
    return authenticated ? <Navigate to={redirectTo} replace /> : children
}

export default RestrictedRoute;
