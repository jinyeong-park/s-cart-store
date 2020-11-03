import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Payment.css';
import { useStateValue } from '../StateProvider.js';
import CheckoutItem from './CheckoutItem';

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout {
            <Link to='/checkout'>({cart?.length} items)</Link>
          }
        </h1>

        {/* payment info for address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>Email: {user?.email}</p>
            <p>770 Harrison St</p>
            <p>Santa Clara, CA 95050</p>
          </div>
        </div>

        {/* payment info for review items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__item'>
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
        <div className='payment__section'>
          <div className='payment___title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>


          </div>
        </div>


      </div>
    </div>
  )
}

export default Payment
