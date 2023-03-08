import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import AuthPage from "../pages/auth/auth.page";
import HomePage from "../pages/home.page";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/auth" element={<AuthPage />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/sign" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}
