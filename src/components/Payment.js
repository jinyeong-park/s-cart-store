import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Payment.css';
import { useStateValue } from '../StateProvider.js';
import CheckoutItem from './CheckoutItem';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../reducer';

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const element = useElements()

  const [processing, setProcessing] = useState("");
  const [suucceeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = e => {
    // stripe logic
  }

  const handleChange = e => {
    // listen for changes in the cardelement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

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
            {/* add stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className='payment__priceContainer'>
                <CurrencyFormat
                    renderText={(value) => (
                        <h3>
                          Order total: {value}
                        </h3>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />

                 <button disabled={processing || disabled ||
                  succeeded}>
                    <span>{processing ? <p>Processing</p> :
                    "Buy Now"}</span>

                  </button>
              </div>
            </form>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Payment
