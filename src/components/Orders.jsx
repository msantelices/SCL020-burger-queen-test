import React from 'react'


const Orders = ({ orders, tableRegister }) => {

  // console.log('orders en orders', orders)

  const totalPrice = () => {
    let count = 0;

    orders.map((food) => {
      count += food.price * food.count
    })
    return count
  }

  return (
    <div className='container'>
      <div className='containerAllOrder'>
        <div className='containerTextOrderWithTable'>
          <h1 className='textOrderOrders'>PEDIDO</h1>
          <h2>Mesa #{tableRegister}</h2>
          <h4>Confirmar para cocinar</h4>
        </div>
        <div className="containerAlltextOrderItems">
          {orders.map((food, index) => {
            console.log('aqui estoy', food)
            return (

              <div key={index}>
                <div className='containertextOrderItems'>
                  <div>{food.name}</div>
                  <div>{food.count}</div>
                  <div>{food.price}$</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="textTotalOrder">
          <p>Total: {totalPrice()}$</p>
        </div>
      </div>
      <div className='containerAllButtonsOrder'>
        <button class="btnOrder">Volver atrás</button>
        <button class="btnOrder">Enviar pedido</button>
      </div>
    </div>

  )
}

export default Orders