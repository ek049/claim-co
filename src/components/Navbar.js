import React from 'react'
import { useHistory } from "react-router-dom"
import { NAV_ROUTES } from '../config/routes.config'
import "./Navbar.css"

export default function Navbar() {
  const history = useHistory()

  const NavItem = ({ route }) => (
    <div className="navbar__item">
      <div className="btn" onClick={() => history.push(route.path)}>
        {route.name}
      </div>
    </div>
  )

  return (
    
    <div className='navbar'>
      <div className='navbar-container'>
        <span className='navbar-logo'><img src='\images\burger.png' alt='logo' height='60px;'></img> <span className='navbar-logo-text'>The Claim Company</span></span>
        {NAV_ROUTES.map(item => <NavItem route={item} key={item.path} />)}
      </div>
    </div>
  )
}
