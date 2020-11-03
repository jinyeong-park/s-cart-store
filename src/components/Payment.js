import React from 'react';
import '../styles/Payment.css';
import { useStateValue } from '../StateProvider.js';
import CheckoutItem from './CheckoutItem';

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        {/* payment info for address */}
        <div className='payment__section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>770 Harrison St</p>
            <p>Santa Clara, CA 95050</p>
          </div>

        </div>

        {/* payment info for review items */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review items and delivery</h3>
        </div>
        <div className='payment_items'>
          {/* reuse the CheckoutItem component to show checkoout item */}
          {cart.map(item =>
            <CheckoutItem
              id={item.id}
              title= {item.title}
              condition= {item.condition}
              price= {item.price}
              image= {item.image}
              rating= {item.rating}
            />)}
        </div>
        </div>

        {/* payment infor for payment method */}
        <div className='payment_section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__title'>


          </div>
        </div>


      </div>
    </div>
  )
}

export default Payment
