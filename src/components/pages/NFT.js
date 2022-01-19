import React from 'react';
import Providers from '../../providers/Providers.comp';
import Routes from '../Routes.comp'
import { ROUTES_NFT } from '../../config/routes.nft.config';
import '../../App.css';
import './Home.page.css'
import NavbarNFT from '../NavbarNFT';
import Wallet from '../AccountDetails';

function NFT() {
  return (
    <div className="login-page">
      <Providers>
        <Wallet />
        <NavbarNFT />
        <Routes routes={ROUTES_NFT} />
      </Providers>
    </div>
  );
}

export default NFT;