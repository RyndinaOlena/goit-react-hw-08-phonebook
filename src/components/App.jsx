
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

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])


  return (
    <Box>
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
