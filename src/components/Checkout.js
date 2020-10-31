import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutItem from './CheckoutItem.js';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src="" alt=""/>
        <div>
          <h2 className='checkout__title'>Your Shopping Cart</h2>
          {/* CheckoutItem */}
          {/* CheckoutItem */}
          {/* CheckoutItem */}
          {/* CheckoutItem */}

        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal></Subtotal>
        {/* <div>Subtotal (2 items): $500</div> */}
      </div>
    </div>


  )
}

export default Checkout
