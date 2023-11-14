import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectAuthenticated } from 'redux/authSelectors'

const PrivedRoute = ({ children, redirectTo = '/login' }) => {
    const authenticated = useSelector(selectAuthenticated)

    return authenticated ? children : <Navigate to={redirectTo} replace />
};

export default PrivedRoute
