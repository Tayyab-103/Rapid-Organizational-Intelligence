/* eslint-disable */

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <h1>Hello</h1>
//     </>
//   )
// }

// export default App
import React, { useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import { Routes, Route, Link, Navigate, Outlet, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "./store/reducer/auth.reducer";
// import SignIn from "views/auth/signIn";
import SignIn from "./views/auth/signIn";
// import PasswordReset from "view/forget_password/components/PasswordReset";
import PasswordReset from "./views/forget_password/components/PasswordReset";
import AdminLayout from "./layouts/admin";
// import AuthLayout from "layouts/auth";
// import RtlLayout from "layouts/rtl";

const App = () => {
  function isTokenExpired(token) {
    try {
      // Your jwt-decode logic remains the same
    } catch (error) {
      return true; // Invalid token or other decoding error
    }
  }

  function ProtectedRoute({ element: Element, ...rest }) {
    const dispatch = useDispatch();

    useEffect(() => {
      if (localStorage.getItem("userData")) {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData.accesstoken && isTokenExpired(userData.accesstoken)) {
          localStorage.removeItem("userData");
          dispatch(clearUser());
        } else {
          dispatch(setUser(userData));
        }
      }
    }, [dispatch]);

    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

    return <Route {...rest} element={isAuthenticated ? <Element /> : <Navigate to="/sign-in" />} />;
  }

  function ProtectedLogin({ element: Element }) {
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

    return isAuthenticated ? null : <Route element={<Element />} />;
  }

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forget-password/verify" element={<PasswordReset />} />
          <Route
            path="/auth"
            element={
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            }
          />
          <ProtectedRoute path="/admin" element={<AdminLayout />} />
          <Route path="/rtl" element={<RtlLayout />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;

