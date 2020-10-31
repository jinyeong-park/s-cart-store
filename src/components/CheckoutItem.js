import React from 'react';
import '../styles/CheckoutItem.css';
import { useStateValue } from '../StateProvider';

function CheckoutItem({id, title, condition, price, image, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // to do
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }


  return (
    <div className='checkoutItem'>
      <img className='checkoutItem__image' src={image} />

      <div className='checkoutItem__info'>
        <p className='checkoutItem__title'>{title}</p>
        <p className='checkoutItem__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutItem__rating'>
          {Array(rating).fill().map(() =>  <p>★</p>)}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  )
}



export default CheckoutItem
