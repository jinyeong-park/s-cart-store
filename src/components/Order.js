import React from 'react';
import '../styles/Order.css';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

function Order() {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm a')}</p>

      <p className='order_id'>
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map(item => {
        <CheckoutItem
          id={item.id}
          tile={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      })}
      <CurrencyFormat
        renderText={(value) => (
            <p>
              Subtotal ({cart.length} items):
              <strong> {value}</strong>
            </p>
         )}
         decimalScale={2}
         value={getCartTotal(cart)}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"$"}
      />


    </div>
  )
}

export default Order
