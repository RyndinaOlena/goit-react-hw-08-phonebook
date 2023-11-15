import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAuthenticated } from "redux/authSelectors"
import { useDispatch } from 'react-redux'
import { requestLogOutThuk } from "redux/authRedusers"
import { Button, } from '@chakra-ui/react'



const Navigation = () => {
    const authenticated = useSelector(selectAuthenticated)

    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(requestLogOutThuk())
    }
    return (<>
        {authenticated ? (
            <>
                <Button onClick={onLogout}>Log Out</Button>
            </>) : (<><NavLink to='/login'><Button m={4}>login</Button></NavLink>
                <NavLink to='/register'><Button>register</Button></NavLink></>)}


    </>


    )
}

export default Navigation
