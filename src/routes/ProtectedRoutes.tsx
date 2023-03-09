import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Favoris from "../components/game/favoris";
import GameDetails from "../components/game/game-details";
import GameList from "../components/game/game-list";
import AuthPage from "../pages/auth/auth.page";
import DashboardPage from "../pages/dashboard/dashboard.page";
import HomePage from "../pages/home.page";
import ProfilePage from "../pages/profile.page";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/auth" element={<AuthPage />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/sign" element={<Register />}></Route>
      </Route>
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="/dashboard/game" element={<GameList />}></Route>
        <Route path="/dashboard/game/:id" element={<GameDetails />}></Route>
        <Route path="/dashboard/favoris" element={<Favoris />}></Route>
      </Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  );
}
