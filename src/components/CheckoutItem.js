import React from 'react';
import '../styles/CheckoutItem.css';
import { useStateValue } from '../StateProvider';
import StarIcon from '@material-ui/icons/Star';

function CheckoutItem({id, title, condition, price, image, rating, hideButton }) {

  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // console.log('selected id', id)
    // to do
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }


  return (
    <div className='checkoutItem'>
      {console.log('hello checkout')}
      <img className='checkoutItem__image' src={image} />

      <div className='checkoutItem__info'>
        <p className='checkoutItem__title'>{title}</p>
        <p className='checkoutItem__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='checkoutItem__condition'>Condition: {condition}</p>
        <div className='checkoutItem__rating'>
         {Array(rating).fill().map(() =>  <p className='checkoutItem__starIcon'>
           <StarIcon fontSize="small" /></p>)}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>

        )}
      </div>
    </div>
  )
}



export default CheckoutItem
