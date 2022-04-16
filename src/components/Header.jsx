import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/EliWeb.png'

function Header() {
    const navigate = useNavigate()
    const location = useLocation()
  
    const pathMatchRoute = (route) => {
      if (route === location.pathname) {
        return true
      }
    }
  
    return (
      <header className='navbar'>
        <img className="logo" src={logo} alt="Elahe Nourkami" />
        <nav className='navbarNav'>
          <ul className='navbarListItems'>
            <li className='navbarListItem' onClick={() => navigate('/')}>
              <p
                className={
                  pathMatchRoute('/')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                Home
              </p>
            </li>
            <li className='navbarListItem' onClick={() => navigate('/skill')}>
            <p
                className={
                  pathMatchRoute('/skill')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                Skills
              </p>
            </li>
            <li className='navbarListItem' onClick={() => navigate('/example')}>
            <p
                className={
                  pathMatchRoute('/example')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                Work Samples
              </p>
            </li>
            <li className='navbarListItem' onClick={() => navigate('/contact')}>
              <p
                className={
                  pathMatchRoute('/contact')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                Contact
              </p>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header
