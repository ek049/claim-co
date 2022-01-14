import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NFT from './components/pages/NFT';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' component={Home} />
          <Route path='/nbk' component={Home} />
          <Route path='/vh' component={Home} />
          <Route path='/NFT' component={NFT} />
          <Route path='/challenge' component={Home} />
          <Route path='/email-club' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
