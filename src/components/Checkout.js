import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutItem from './CheckoutItem.js';
import { useStateValue } from '../StateProvider'



function Checkout() {
  console.log('Checkout')
  const [{ cart }, dispatch] = useStateValue();
  console.log('cartitem', cart)

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src="" alt=""/>
        <div>
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

          {/* <CheckoutItem
            id='1'
            title='Diptyque Perfume Doson'
            condition='Almost new'
            price={90}
            image='https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen'
            rating={5}
          />


          <CheckoutItem
            id='1'
            title='Diptyque Perfume Doson'
            condition='Almost new'
            price={90}
            image='https://mercari-images.global.ssl.fastly.net/photos/m76577444376_1.jpg?1602650326&w=200&h=200&fitcrop&sharpen'
            rating={5}
          /> */}

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
