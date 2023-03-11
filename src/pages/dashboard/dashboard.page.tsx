import { Outlet } from 'react-router-dom'
import '../../assets/scss/dashboard/dashboard.scss'
import Navbar from '../../components/game/utils/navbar'
import { GameContextProvider } from '../../context/gameContext'
 const DashboardPage = () => {
  return (
    <div className="Dashboard">
      <GameContextProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </GameContextProvider>
    </div>
  )
}

export default DashboardPage;
