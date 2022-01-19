import React from 'react'
import { useHistory } from "react-router-dom"
import { NAV_ROUTES_NFT } from '../config/routes.nft.config'
import "./navbarNFT.css"

export default function NavbarNFT() {
  const history = useHistory()

  const NavItem = ({ route }) => (
    <div className="navbarNFT__item">
      <div className="btn" onClick={() => history.push(route.path)}>
        {route.name}
      </div>
    </div>
  )

  return (
    <div className="navbarNFT">
      {NAV_ROUTES_NFT.map(item => <NavItem route={item} key={item.path} />)}
    </div>
  )
}
