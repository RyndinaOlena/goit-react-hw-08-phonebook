import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAuthenticated } from "redux/authSelectors"
import { useDispatch } from 'react-redux'
import { requestLogOutThuk } from "redux/authRedusers"
import { Box, Button, } from '@chakra-ui/react'



const Navigation = () => {
    const basicBoxStyles = {
        paddingTop: '50px',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,

    }
    const authenticated = useSelector(selectAuthenticated)

    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(requestLogOutThuk())
    }
    return (<>
        {authenticated ? (
            <>
                <Button onClick={onLogout}>Log Out</Button>
            </>) : (<Box sx={basicBoxStyles} filter='auto'><NavLink to='/login'><Button background={'pink'} m={4}>login</Button></NavLink>
                <NavLink to='/register'><Button background={'pink'} >register</Button></NavLink></Box>)}


    </>


    )
}

export default Navigation
