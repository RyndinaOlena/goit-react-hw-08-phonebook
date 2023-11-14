import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAuthenticated } from "redux/authSelectors"
import { useDispatch } from 'react-redux'
import { requestLogOutThuk } from "redux/authRedusers"


const Navigation = () => {
    const authenticated = useSelector(selectAuthenticated)

    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(requestLogOutThuk())
    }
    return (<>
        {authenticated ? (
            <>
                {/* <NavLink to={'./contact'}>Contacts</NavLink> */}
                <button onClick={onLogout}>Log Out</button>
            </>) : (<><NavLink to='/login'><button>login</button></NavLink>
                <NavLink to='/register'><button>register</button></NavLink></>)}


    </>


    )
}

export default Navigation
