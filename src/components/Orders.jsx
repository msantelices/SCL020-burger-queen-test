import React from 'react'


const Orders = ({orders, tableRegister}) => {

// console.log('orders en orders', orders)

  return (
    <div>
       {orders.map((food, index) => {
        console.log('aqui estoy',food)
            return (
              <div key={index}>
                <div>Mesa # {tableRegister}</div>
                <div>{food.name}</div>
                <div>{food.count}</div>
                <div>{food.price}</div>
              </div>
            );
          })}
          <div><button>Enviar Pedido</button></div>
    </div>
  )
}

export default Orders