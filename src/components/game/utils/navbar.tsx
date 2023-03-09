import React from 'react'
import logo from '../../../assets/img/logo/logo_react.svg';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar__Menu'>
            <div className='Navbar__Logo'>
                <img src={logo} alt="ceci est un logo" />
            </div>
            <nav>
                <ul>
                    <li><i className="bi bi-house-fill"></i>Dashboard</li>
                    <li><i className="bi bi-collection-fill"></i>Librairie</li>
                    <li><i className="bi bi-heart-fill"></i>Favoris</li>
                    <li><i className="bi bi-person-badge-fill"></i>Mon compte</li>
                </ul>
            </nav>
        </div>
        <div className='Navbar__Logout'>
            <nav>
                <ul>
                    <li><i className="bi bi-box-arrow-left"></i>Deconnexion</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar;