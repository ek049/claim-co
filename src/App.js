import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import NFT from './components/pages/NFT';
import comingSoon from './components/pages/comingSoon.page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/nbk' component={comingSoon} />
          <Route path='/vh' component={comingSoon} />
          <Route path='/NFT' component={NFT} />
          <Route path='/ml' component={comingSoon} />
          <Route path='/email-club' component={comingSoon} />
          <Route path='/contact-us' component={comingSoon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
