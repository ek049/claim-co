import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <h1>Welcome to the<br></br>Claim Company</h1> */}
      <img src='\images\logo.png' alt='logo' height='300px;'></img>
      <p>Call for reservations or book online below!</p>
      <p><b>Dining Rooms now OPEN!</b></p>
      
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/nbk'
        >
          Northbook
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/vh'
        >
          Vernon Hills
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
