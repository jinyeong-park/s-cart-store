import React from 'react';
import '../styles/Product.css';
import { useStateValue } from '../StateProvider';

function Product({id, title, condition, price, image, rating }) {

// const [state, dispatch] = useStateValue();
const [{ cart }, dispatch] = useStateValue();
// state: global state
console.log('cart >>>>', cart)
// console.log('cart >>>>', state)
// dispatch: how to manipulate data

  const addToCart = () => {
    // dispatch the item into the data layer (action & action item)
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        condition: condition,
        price: price,
        image: image,
        rating: rating
      }
    })
  }
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>


        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='product__condition'>Condition: {condition}</p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) =>  <p>★</p>)}
        </div>
      </div>

      <img src={image} alt=""/>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
