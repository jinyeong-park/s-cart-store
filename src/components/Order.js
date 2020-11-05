import React from 'react';
import '../styles/Order.css';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import CheckoutItem from './CheckoutItem'


function Order({ order }) {

  return (
    <div className='order'>
      <h2>Order</h2>
      {console.log('order', order)}
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm a')}</p>

      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map(item => (
        // reuse CheckoutItem component
        <CheckoutItem
          id={item.id}
          tile={item.title}
          condition= {item.condition}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
            <h3 className='order__total'>
              Order Total: {value}
            </h3>
         )}
         decimalScale={2}
         value={order.data.amount / 100}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"$"}
      />
    </div>
  )
}

export default Order
