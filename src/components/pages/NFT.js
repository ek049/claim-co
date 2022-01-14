import React from 'react';
import Providers from '../../providers/Providers.comp';
import Routes from '../Routes.comp'
import { ROUTES } from '../../config/routes.config';
import '../../App.css';
import NavbarNFT from '../NavbarNFT';

function NFT() {
  return (
    <div className="login-page">
      <Providers>
        <NavbarNFT />
        <Routes routes={ROUTES} />
      </Providers>
    </div>
  );
}

export default NFT;