import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import '../styles/Orders.css';
import { useStateValue } from '../StateProvider';
import Order from './Order'

function Orders() {
  console.log('orders')
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // show recent order first
      db
        .collection('user')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {/* debugging */}

        {orders?.map(order => (
          <Order order={order}/>
        )
        )}
      </div>
    </div>
  )
}

export default Orders
