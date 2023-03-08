import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/auth/login.page'
import RegisterPage from '../pages/auth/register.page'
import HomePage from '../pages/home.page'

export default function ProtectedRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth/login" element={<LoginPage/>}></Route>
        <Route path="/auth/sign" element={<RegisterPage/>}></Route>
    </Routes>
  )
}

