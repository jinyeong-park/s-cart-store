import React from 'react';
import '../styles/Product.css';

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>Diptyque Doson</p>
        {/* <p>CHANEL Aged Calfskin Quilted 2.55 Reissue 226 Flap Black</p> */}
        <p className='product__price'>
          <small>$</small>
          <strong>152</strong>
        </p>
        <div className='product__rating'>
          <p>★★★★</p>
        </div>
      </div>

      {/* <img src="https://www.fashionphile.com/images/product-images/thumb/3ab0b98ff0565c8e099a5e8e6c0b2bf9/1ba36119ee329bec22ae0714e9a287a0.jpg" alt=""/> */}

      <img src="https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen" alt=""/>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
