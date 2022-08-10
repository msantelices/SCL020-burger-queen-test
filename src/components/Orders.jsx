import React from 'react'
import { createOrders } from '../firebase/firestore';
import { auth} from '../firebase/init'
import { withRouter } from 'react-router-dom'


const Orders = ({ history, orders, tableRegister}) => {


  
  // console.log('orders en orders', orders)

  const totalPrice = () => {
    let count = 0;

    orders.map((food) => {
      count += food.price * food.count
      return count
    })
  }

//   const getFormatCurrency =  (amount) {
//     return Intl.NumberFormat('es-CL').format(amount).toString();
// };


  const saveOrder = async() =>{
    const currentUser = auth.currentUser.uid
    await createOrders(currentUser, tableRegister, orders )
      history.push('/welcomewaiter')
    
  }

  const goBack = ()=>{
    history.push('/welcomewaiter')
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
        <button className="btnOrder" onClick={()=>goBack()}>Volver atrás</button>
        <button className="btnOrder" onClick={()=>saveOrder()} >Enviar pedido</button>
      </div>
    </div>

  )
}

export default withRouter(Orders)