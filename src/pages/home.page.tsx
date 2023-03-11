import { useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import '../assets/scss/home/home.scss'
import Navbar from '../components/game/utils/navbar'
import { auth } from '../firebase-config'

const HomePage = () => {
    const navigate = useNavigate()
    const cookies = new Cookies()
    const existe = cookies.get("monCookie") !== undefined

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!existe) {
          navigate("/auth/login")
        } else {
          // console.log("COOKIE UID"+cookies.get("uid"))
          // const uidMemo = useMemo(() => uid, [uid])
          // console.log(uidMemo)
          navigate("/dashboard/game")
        }
      })
      return unsubscribe
    }, [existe, navigate])
    
  return (
    <div className="Home">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>
        <h1 className="intro">Bienvenue sur Gaming Library</h1>

        <h2 className="intro">
          Retrouver tous vos jeux gratuits sur un seul et même site web !
        </h2>
        <p className="intro">
          Vous avez un déja un compte ? <Link to="/auth/login">Connexion</Link>
        </p>
        <p className="intro">
          Ce n'est pas le cas ? Créer votre compte en quelques cliques, <Link to="/auth/sign"> Clique ici </Link>
        </p>
      </div>
    </div>
  )
}

export default HomePage;

