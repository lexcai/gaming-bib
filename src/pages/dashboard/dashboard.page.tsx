import { Outlet } from 'react-router-dom'
import '../../assets/scss/dashboard/dashboard.scss'
import Navbar from '../../components/game/utils/navbar'

 const DashboardPage = () => {
  return (
    <div className='Dashboard'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default DashboardPage;