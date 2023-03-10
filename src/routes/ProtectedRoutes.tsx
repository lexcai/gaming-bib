import { useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/userContext"
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Favoris from "../components/game/favoris";
import GameDetails from "../components/game/game-details";
import GameList from "../components/game/game-list";
import AuthPage from "../pages/auth/auth.page";
import DashboardPage from "../pages/dashboard/dashboard.page";
import HomePage from "../pages/home.page";
import ProfilePage from "../pages/profile/profile.page";
import Private from '../pages/private/Private';

export default function ProtectedRoutes() {
      const { currentUser } = useContext(UserContext)
      console.log("PRIVATE", currentUser)
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/auth" element={<AuthPage />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/sign" element={<Register />}></Route>
      </Route>
      <Route path="/private" element={<Private />}>
        <Route path="/private/dashboard" element={<DashboardPage />}>
          <Route path="/private/dashboard/game" element={<GameList />}></Route>
          <Route
            path="/private/dashboard/game/:id"
            element={<GameDetails />}
          ></Route>
          <Route
            path="/private/dashboard/favoris"
            element={<Favoris />}
          ></Route>
        </Route>
        <Route path="/private/profile" element={<ProfilePage />}></Route>
      </Route>
    </Routes>
  )
}
