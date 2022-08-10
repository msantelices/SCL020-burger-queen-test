import React from 'react'
import OrdersChef from '../components/OrdersChef'

const SeeOrdersChef = ({ordersDb, setOrdersDb}) => {
  return (
    <div>
        <OrdersChef ordersDb={ordersDb} setOrdersDb={setOrdersDb} />
    </div>
  )
}

export default SeeOrdersChef