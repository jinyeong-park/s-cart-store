import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider.js';
import '../styles/Home.css';
import Product from './Product';

function Home() {

  const [{ displayItems }, dispatch] = useStateValue();

  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://i.imgur.com/qydIey7.png' alt='' />

        <div className='home_row'>

          {
            displayItems.map((item) => (

            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              condition={item.condition}
              image={item.image}
              rating={item.rating}
          />

            ))
          }
          </div>
      </div>
    </div>
  )
}

export default Home

