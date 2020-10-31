import React from 'react';
import '../styles/Product.css';

function Product({title, condition, price, image, rating }) {
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
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
