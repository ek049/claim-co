import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='top_text'>Choose your location!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/image5.jpg'
              text='Northbook'
              text2='776 Skokie Blvd, Northbrook, IL 60062'
              label='(847) 291-9111'
              path='/services'
            />
            <CardItem
              src='images/image2.png'
              text='Vernon Hills'
              text2='506 Hawthorn Center, Vernon Hills, IL 60061'
              label='(847) 247-1973'
              path='/services'
            />
          </ul>
          <h1>Find out more!</h1><br></br><br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/image6.jpg'
              text='School Fundraising and Charitable Involvements'
              label='Help the Community!'
              path='/services'
            />
            <CardItem
              src='images/image7.jpg'
              text='Order Claim Company to go.....'
              label='Check out the app!'
              path='/products'
            />
            <CardItem
              src='images/image4.jpg'
              text='History of The Claim Company'
              label='About Us'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
