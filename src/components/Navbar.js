/* import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; 

  useEffect(() => {
    //showButton();
  }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='\images\burger.png' alt='logo' height='60px;'></img> <span className='navbar-logo-text'>The Claim Company</span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/nbk'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Northbrook
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/vh'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Vernon Hills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/challenge'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Motherlode Challenge
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/email-club'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Email Club
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/nft'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                NFT
              </Link>
            </li>

          </ul>
          { {button && <Button buttonStyle='btn--outline' link='/nft'>NFT</Button>} }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
 */

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
