import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";


const OrdersChef = ({ ordersDb, history }) => {
  //Debemos hacer un boton donde tendra una funcion para cambiar el Status del pedido, (Pendiente, preparacion, listo, entregado)


  const table1 = ordersDb.filter((order) => {
    return order.tableName === 1;
  });

  const table2 = ordersDb.filter((order) => {
    return order.tableName === 2;
  });

  const table3 = ordersDb.filter((order) => {
    return order.tableName === 3;
  });

  const table4 = ordersDb.filter((order) => {
    return order.tableName === 4;
  });

  

    useEffect(() => {
        localStorage.setItem("info", JSON.stringify(ordersDb));
      }, [ordersDb]);

  const checkOrder = (tName) => {
    // console.log("clickeando");
    const orderChecked = JSON.parse(localStorage.getItem("info"));
    // console.log("Menu after LocalStorage", menuFood);
    if (orderChecked) {
      const arrayPosition = orderChecked.findIndex((orderinfo) => {
        return orderinfo.tableName === tName;
      });

      console.log('posi',orderChecked[arrayPosition].status)
    }
    

    // history.push("/welcomechef");
  };



  return (
    <div className="container">
      <div>
        <h2>PEDIDOS</h2>
      </div>
      <div>
        <div>
          {table1.map((orderT1, index) => {
            return (
              <div key={index}>
                <h2>
                  Mesa {orderT1.tableName} Tiempo{" "}
                  {orderT1.time
                    .toDate()
                    .toLocaleString([], { hour: "2-digit", minute: "2-digit" })}
                </h2>
                {orderT1.order.map((producto, index) => {
                  return (
                    <div key={index}>
                      <div>{producto.name}</div>
                      <div>{producto.count}</div>
                    </div>
                  );
                })}
                <div className="containerAllButtonsOrder">
                  <button className="btnOrder" onClick={() => checkOrder(orderT1.tableName)}>
                    Listo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          {table2.map((orderT2, index) => {
            return (
              <div key={index}>
                <h2>
                  Mesa {orderT2.tableName} Tiempo{" "}
                  {orderT2.time
                    .toDate()
                    .toLocaleString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                </h2>
                {orderT2.order.map((producto, index) => {
                  return (
                    <div key={index}>
                      <div>{producto.name}</div>
                      <div>{producto.count}</div>
                    </div>
                  );
                })}
                <div className="containerAllButtonsOrder">
                  <button className="btnOrder" onClick={() => checkOrder(orderT2.tableName)}>
                    Listo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          {table3.map((orderT3, index) => {
            return (
              <div key={index}>
                <h2>
                  Mesa {orderT3.tableName} Tiempo{" "}
                  {orderT3.time
                    .toDate()
                    .toLocaleString([], { hour: "2-digit", minute: "2-digit" })}
                </h2>
                {orderT3.order.map((producto, index) => {
                  return (
                    <div key={index}>
                      <div>{producto.name}</div>
                      <div>{producto.count}</div>
                    </div>
                  );
                })}
                <div className="containerAllButtonsOrder">
                  <button className="btnOrder" onClick={() => checkOrder(orderT3.tableName)}>
                    Listo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          {table4.map((orderT4, index) => {
            return (
              <div key={index}>
                <h2>
                  Mesa {orderT4.tableName} Tiempo{" "}
                  {orderT4.time
                    .toDate()
                    .toLocaleString([], { hour: "2-digit", minute: "2-digit" })}
                </h2>
                {orderT4.order.map((producto, index) => {
                  return (
                    <div key={index}>
                      <div>{producto.name}</div>
                      <div>{producto.count}</div>
                    </div>
                  );
                })}
                <div className="containerAllButtonsOrder">
                  <button className="btnOrder" onClick={() => checkOrder(orderT4.tableName)}>
                    Listo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(OrdersChef);
