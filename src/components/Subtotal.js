import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider'
import { getCartTotal } from '../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();
  // let totalPrice = 0;
  // console.log('cart', cart)
  // const mapPrice = cart.map(item => totalPrice += Number(item.price))
  // console.log(mapPrice)

  return (
    <div className='subtotal'>
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

      {/* react-router-dom => history.push : push into the browser, redirect keep the design */}
      <button onClick={ e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal
