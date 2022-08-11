import React from 'react'
import { updateDoc, db, doc } from "../firebase/init"

const KitchenOrders = ({ orderWithId }) => {

    // console.log('aquiii en kitchen ', orderWithId)

    const table1 = orderWithId.filter((order) => {
        return order.tableName === 1
    })

    const table2 = orderWithId.filter((order) => {
        return order.tableName === 2
    })

    const table3 = orderWithId.filter((order) => {
        return order.tableName === 3
    })

    const table4 = orderWithId.filter((order) => {
        return order.tableName === 4
    })

    const checkOrder = async ( tableId) => {

        // console.log("clickeando")
        let buttonTablePosition = []
        let orderIdPosition = []

        const orderTableButton = JSON.parse(localStorage.getItem("info"))
        // console.log("Menu after LocalStorage", menuFood)
        if (orderTableButton) {
            buttonTablePosition = orderTableButton.findIndex((orderinfo) => {
                return orderinfo.orderid === tableId
            })
        }

        if (orderWithId) {
            orderIdPosition = orderWithId.findIndex((data) => {
                return data.orderid === tableId
            })
            // console.log('aqui 1', orderTableButton[buttonTablePosition].orderid)
            // console.log('aqui 2', orderWithId[orderIdPosition].orderid)
        }

        //--Parte de update Status pedido
        if (orderTableButton[buttonTablePosition].orderid === orderWithId[orderIdPosition].orderid) {
            const updatecooking = doc(db, "orders", orderTableButton[buttonTablePosition].orderid)

            await updateDoc(updatecooking, {
                status: "Ready",
            })
            
        }

        // history.push("/welcomechef")
    }



    return (
        <div className="container">
            <div className="textOrderChef">
                <h1 className="textOrderOrders textOrderOrdersCHEF">PEDIDOS</h1>
            </div>
            <div className="containerAlltextOrderItemsChef">


                {table1.map((orderT1, index) => {
                    // console.log('status', orderT1.status)
                    return orderT1.status === 'cooking' ? (
                        <div key={index} className="containerOrderChefBox" >
                            <div>
                                <h2 className="tableOrderChef">Mesa {orderT1.tableName}</h2>
                                <h2>
                                    {" "}
                                    Tiempo{" "}
                                    {orderT1.time.toDate().toLocaleString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </h2>
                                {orderT1.order.map((producto, index) => {
                                    return (
                                        <div key={index} className="allContainerOrderChef">
                                            <div>{producto.name}</div>
                                            <div>{producto.count}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="containerAllButtonsOrderChef">
                                <button
                                    className="btnOrder"
                                    onClick={() => checkOrder( orderT1.orderid)}
                                >
                                    Listo
                                </button>
                            </div>
                        </div>
                    ) : null

                })}


                {table2.map((orderT2, index) => {
                    return orderT2.status === 'cooking' ? (
                        <div key={index} className="containerOrderChefBox">
                            <div>
                                <h2 className="tableOrderChef">Mesa {orderT2.tableName}</h2>
                                <h2>
                                    {" "}
                                    Tiempo{" "}
                                    {orderT2.time.toDate().toLocaleString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </h2>
                                {orderT2.order.map((producto, index) => {
                                    return (
                                        <div key={index} className="allContainerOrderChef">
                                            <div>{producto.name}</div>
                                            <div>{producto.count}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="containerAllButtonsOrderChef">
                                <button
                                    className="btnOrder"
                                    onClick={() => checkOrder( orderT2.orderid)}
                                >
                                    Listo
                                </button>
                            </div>
                        </div>
                    ) : null
                })}




                {table3.map((orderT3, index) => {
                    return orderT3.status === 'cooking' ? (
                        <div key={index} className="containerOrderChefBox">
                            <div>
                                <h2 className="tableOrderChef">Mesa {orderT3.tableName}</h2>
                                <h2>
                                    {" "}
                                    Tiempo{" "}
                                    {orderT3.time.toDate().toLocaleString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </h2>
                                {orderT3.order.map((producto, index) => {
                                    return (
                                        <div key={index} className="allContainerOrderChef">
                                            <div>{producto.name}</div>
                                            <div>{producto.count}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="containerAllButtonsOrderChef">
                                <button
                                    className="btnOrder"
                                    onClick={() => checkOrder( orderT3.orderid)}
                                >
                                    Listo
                                </button>
                            </div>
                        </div>
                    ) : null
                })}




                {table4.map((orderT4, index) => {
                    return orderT4.status === 'cooking' ? (
                        <div key={index} className="containerOrderChefBox">
                            <div>
                                <h2 className="tableOrderChef">Mesa {orderT4.tableName}</h2>
                                <h2>
                                    {" "}
                                    Tiempo{" "}
                                    {orderT4.time.toDate().toLocaleString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </h2>
                                {orderT4.order.map((producto, index) => {
                                    return (
                                        <div key={index} className="allContainerOrderChef">
                                            <div>{producto.name}</div>
                                            <div>{producto.count}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="containerAllButtonsOrderChef">
                                <button
                                    className="btnOrder"
                                    onClick={() => checkOrder( orderT4.orderid)}
                                >
                                    Listo
                                </button>
                            </div>
                        </div>
                    ) : null
                })}

            </div>
        </div>
    )
}

export default KitchenOrders