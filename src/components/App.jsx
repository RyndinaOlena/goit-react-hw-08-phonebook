
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigate";
import Contacts from "./Contacts";
import { useDispatch } from 'react-redux'
import { refreshThunk } from "redux/authRedusers";
import RestriftedRoute from "./RestrictedRoute";
import PrivedRoute from "./PrivedRoute";

const LoginPage = lazy(() => import('./LoginPage'))
const RegisterPage = lazy(() => import('./RegisterPage'))




export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])
  return (
    <><Navigation />
      <Suspense fallback={<div>Loader...</div>}>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<RestriftedRoute><LoginPage /></RestriftedRoute>} />
          <Route path='/register' element={<RestriftedRoute><RegisterPage /></RestriftedRoute>} />
          <Route path="/contact" element={<PrivedRoute><Contacts /></PrivedRoute>} />
        </Routes>
      </Suspense></>


  );
};
