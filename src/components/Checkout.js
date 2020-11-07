import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutItem from './CheckoutItem.js';
import { useStateValue } from '../StateProvider'



function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  const usernameFromEmail = user ? user.email.split('@').[0] : 'Guest'
  console.log('cartitem', cart)

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src="" alt=""/>
        <div>
          <h3>Hello, {usernameFromEmail}</h3>
          <h2 className='checkout__title'>Your Shopping Cart</h2>
          {/* {cart.map(item => <CheckoutItem item={item}/>)} */}
          {cart.map(item => <CheckoutItem
            id={item.id}
            title= {item.title}
            condition= {item.condition}
            price= {item.price}
            image= {item.image}
            rating= {item.rating}
            />)}

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
