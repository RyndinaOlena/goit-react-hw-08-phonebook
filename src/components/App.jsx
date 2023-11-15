
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigate";
import Contacts from "./Contacts";
import { useDispatch } from 'react-redux'
import { refreshThunk } from "redux/authRedusers";
import RestrictedRoute from "./RestritedRoute";
import PrivedRoute from "./PrivedRoute";
import { Box } from "@chakra-ui/react";


const LoginPage = lazy(() => import('./LoginPage'))
const RegisterPage = lazy(() => import('./RegisterPage'))




export const App = () => {
  // const basicBoxStyles = {
  //   // display: 'flex',
  //   margin: 'auto',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   boxSize: '600px',
  //   heith: '00px',
  //   color: 'white',
  //   textShadow: '0 0 20px black',
  //   fontWeight: 'bold',
  //   fontSize: '20px',
  //   px: 4,
  //   background:
  //     'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
  // }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])


  return (
    <Box
    // sx={basicBoxStyles} filter='auto'
    // w="200" h="500" bgGradient="linear(to-t, green.200, pink.500)" textAlign={'center'}
    >

      <Navigation />
      <Suspense fallback={<div>Loader...</div>}>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
          <Route path='/register' element={<RestrictedRoute><RegisterPage /></RestrictedRoute>} />
          <Route path="/contact" element={<PrivedRoute><Contacts /></PrivedRoute>} />
        </Routes>
      </Suspense></Box>


  );
};
