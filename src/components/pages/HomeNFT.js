import React from 'react'
import { useHistory } from "react-router-dom"
import Header from '../Header'
import "./Home.page.css"

export default function HomeNFT() {
  const history = useHistory()

  return (
    <>
      <Header
        title={<><span className="highlight">Motherlode</span>NFT</>}
        subtitle={<>Get your favorite <span className="highlight">Motherlode Burger</span> on the blockchain</>}
      />
      <img className="header-image"
        alt="Header"
        onClick={() => history.push("/dappies")}
        src={`${process.env.PUBLIC_URL}/images/image2.png`}
      />
    </>
  )
}
