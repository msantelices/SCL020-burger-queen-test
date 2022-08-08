import React, { useEffect, useState } from "react";
import { getOrders } from "../firebase/firestore";
import { auth, collection, db, getDocs } from "../firebase/init";


const OrdersChef = () => {
  const [ordersDb, setOrdersDb] = useState([]);



  useEffect(() => {
        const keepOrders = getOrders();
        setOrdersDb(keepOrders)
   
  }, []);

  console.log('aquiii', ordersDb)


  const table1 = ordersDb.filter((order) => {
    return order.tableName === 1;
  });

  const table2 = ordersDb.filter((order) => {
    return order.tableName === 2;
  });



//   const getOrders = () => {
//     const ordersCollection = collection(db, "orders");

//     getDocs(ordersCollection)
//       .then((response) => {
//         const orderArray = response.docs.map((doc) => {
//           return doc.data();
//         });
//         setOrdersDb(orderArray)
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };


  

  return (
    <div className="container">
      <div>
        <h2>PEDIDOS</h2>
      </div>
      <div>
        <div>
          {/* {ordersDb.map((order, index) => {
            return (
              <div key={index}>
                <h2>Mesa {order.tableName}</h2>
                {order.order.map((producto, index) => {
                  return (
                    <div key={index}>
                      <div>{producto.name}</div>
                      <div>{producto.count}</div>
                    </div>
                  );
                })}
              </div>
            );
          })} */}
        </div>
      </div>
      <div>
      <div>
          {table2.map((orderT2, index) => {
            return (
              <div key={index}>
                <h2>Mesa {orderT2.tableName}</h2>
                {orderT2.order.map((producto, index) => {
                  return (
                    <div key={index}>
                      <div>{producto.name}</div>
                      <div>{producto.count}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) 
};

export default OrdersChef;
